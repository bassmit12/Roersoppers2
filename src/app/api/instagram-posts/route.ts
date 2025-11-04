import { NextRequest, NextResponse } from "next/server";
import { ApifyClient } from "apify-client";

// Augment global scope for cache to avoid any casts
declare global {
  var __igCache: Map<string, CacheEntry> | undefined;
}

// Simple in-memory cache (per server instance)
// Caches posts per username for 7 days
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

interface NormalizedPost {
  username: string;
  imageUrl: string;
  caption: string;
  timestamp: string; // formatted for nl-NL
  postUrl: string;
}

interface CacheEntry {
  at: number; // epoch ms
  data: NormalizedPost[]; // sorted desc by time
}

const globalCache: Map<string, CacheEntry> =
  globalThis.__igCache ?? new Map<string, CacheEntry>();
globalThis.__igCache = globalCache;

function formatDateNL(date: Date) {
  return date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function normalizeItems(
  items: unknown[],
  fallbackUsername: string
): NormalizedPost[] {
  const safeItems = Array.isArray(items) ? items : [];

  return safeItems
    .map((raw) => {
      const it = raw as Record<string, unknown>;

      const tsRaw =
        it.timestamp ||
        it.takenAt ||
        it.takenAtDate ||
        it.takenAtUnix ||
        it.date ||
        it.time;

      let ts: Date = new Date(NaN);
      if (typeof tsRaw === "number") {
        ts = new Date(tsRaw < 2_000_000_000 ? tsRaw * 1000 : tsRaw);
      } else if (typeof tsRaw === "string") {
        ts = new Date(tsRaw);
      }

      const owner =
        (it.owner as Record<string, unknown> | undefined) ?? undefined;
      const ownerU =
        owner && typeof owner.username === "string"
          ? owner.username
          : undefined;

      const username =
        (typeof it.ownerUsername === "string" && it.ownerUsername) ||
        (typeof it.username === "string" && it.username) ||
        ownerU ||
        fallbackUsername;

      const imgsFromImages = Array.isArray(it.images)
        ? (it.images.filter((v) => typeof v === "string") as string[])
        : [];
      const imgsFromImageUrls = Array.isArray(it.imageUrls)
        ? (it.imageUrls.filter((v) => typeof v === "string") as string[])
        : [];

      const imageUrlCandidate = imgsFromImages[0] || imgsFromImageUrls[0];
      const imageUrl =
        (typeof imageUrlCandidate === "string" && imageUrlCandidate) ||
        (typeof it.displayUrl === "string" && it.displayUrl) ||
        (typeof it.thumbnailUrl === "string" && it.thumbnailUrl) ||
        (typeof it.imageUrl === "string" && it.imageUrl) ||
        "";

      const shortCode = typeof it.shortCode === "string" ? it.shortCode : "";
      const directUrl = typeof it.url === "string" ? it.url : "";
      const postUrl =
        directUrl ||
        (shortCode ? `https://www.instagram.com/p/${shortCode}/` : "");

      const caption =
        (typeof it.caption === "string" && it.caption) ||
        (typeof it.title === "string" && it.title) ||
        "";

      return {
        username,
        imageUrl,
        caption,
        timestamp: isNaN(ts.getTime()) ? "" : formatDateNL(ts),
        postUrl,
      } as NormalizedPost;
    })
    .filter((p) => Boolean(p.imageUrl) && Boolean(p.postUrl));
}

function getEpochMsFromItem(raw: unknown): number {
  const it = (raw as Record<string, unknown>) || {};
  const tsRaw =
    (it.timestamp as unknown) ??
    (it.takenAtUnix as unknown) ??
    (it.takenAt as unknown) ??
    (it.takenAtDate as unknown) ??
    (it.date as unknown) ??
    (it.time as unknown);

  if (typeof tsRaw === "number") {
    // if seconds, convert to ms
    return tsRaw < 2_000_000_000 ? tsRaw * 1000 : tsRaw;
  }
  if (typeof tsRaw === "string") {
    const d = new Date(tsRaw);
    const ms = d.getTime();
    return isNaN(ms) ? 0 : ms;
  }
  return 0;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = Math.max(1, parseInt(searchParams.get("limit") || "3", 10));
    const username = (
      searchParams.get("username") || "patrickderoersopperssg"
    ).replace(/^@/, "");

    // Cache controls via query params
    const refresh = ["1", "true", "yes"].includes(
      (searchParams.get("refresh") || "").toLowerCase()
    );
    const purgeParam = searchParams.get("purge");

    const cacheKey = `user:${username}`;
    const now = Date.now();

    // Purge cache if requested
    if (purgeParam) {
      if (purgeParam === "all") {
        globalCache.clear();
      } else {
        globalCache.delete(cacheKey);
      }
    }

    // Serve fresh cache if available and not forced to refresh
    const cached = !refresh ? globalCache.get(cacheKey) : undefined;
    if (
      cached &&
      now - cached.at < WEEK_MS &&
      Array.isArray(cached.data) &&
      cached.data.length
    ) {
      const body = cached.data.slice(0, limit);
      return new NextResponse(JSON.stringify(body), {
        headers: {
          "Content-Type": "application/json",
          // Cache on CDN for a week, allow 1 day stale while revalidating
          "Cache-Control":
            "public, s-maxage=604800, stale-while-revalidate=86400",
        },
      });
    }

    // Fetch from Apify (Instagram Scraper Actor)
    const token = process.env.APIFY_TOKEN;
    if (!token) {
      throw new Error("Missing APIFY_TOKEN env var");
    }

    const client = new ApifyClient({ token });

    const input = {
      directUrls: [`https://www.instagram.com/${username}/`],
      resultsType: "posts",
      resultsLimit: 3, // fetch enough then slice
      addParentData: false,
    } as const;

    const run = await client.actor("shu8hvrXbJbY3Eb9W").call(input);

    const { items } = await client.dataset(run.defaultDatasetId).listItems({
      // cap server payload
      limit: 100,
    });

    // Sort by raw timestamp newest -> oldest so newest renders leftmost
    const sortedItems = Array.isArray(items)
      ? [...items].sort((a, b) => getEpochMsFromItem(b) - getEpochMsFromItem(a))
      : [];

    const normalized = normalizeItems(sortedItems, username);

    // Save to cache (even if empty to avoid hammering)
    globalCache.set(cacheKey, { at: now, data: normalized });

    const body = normalized.slice(0, limit);

    return new NextResponse(JSON.stringify(body), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control":
          "public, s-maxage=604800, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error serving Instagram posts:", error);

    // Try to serve any cached (even stale) data if present
    try {
      const searchParams = request.nextUrl.searchParams;
      const limit = Math.max(1, parseInt(searchParams.get("limit") || "3", 10));
      const username = (
        searchParams.get("username") || "patrickderoersopperssg"
      ).replace(/^@/, "");
      const cacheKey = `user:${username}`;
      const cached = globalCache.get(cacheKey);
      if (cached && Array.isArray(cached.data) && cached.data.length) {
        const body = cached.data.slice(0, limit);
        return new NextResponse(JSON.stringify(body), {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, s-maxage=3600",
          },
        });
      }
    } catch {}

    return NextResponse.json(
      { error: "Failed to serve Instagram posts" },
      { status: 500 }
    );
  }
}
