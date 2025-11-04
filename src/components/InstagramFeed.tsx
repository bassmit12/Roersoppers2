"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { useEffect, useState } from "react";

interface InstagramPostProps {
  username: string;
  imageUrl: string;
  caption: string;
  timestamp: string;
  postUrl: string;
}

// Helper function to ensure we're using local images when available
const getLocalImagePath = (path: string) => {
  // If the path already points to our local images folder, use it directly
  if (path.startsWith("/images/")) {
    return path;
  }

  // Map specific strings to our local images
  if (
    path.includes("clubkampioenschappen") ||
    path.includes("Clubkampioenschappen")
  ) {
    return "/images/training.jpg"; // fallback to available image
  } else if (path.includes("200m") || path.includes("wedstrijd")) {
    return "/images/Wedstrijd.jpg";
  } else if (path.includes("senioren") || path.includes("competitie")) {
    return "/images/senioren.jpg";
  }

  // Return the original path as fallback
  return path;
};

export function InstagramPost({
  username,
  imageUrl,
  caption,
  postUrl,
}: InstagramPostProps) {
  // Format the caption to be shorter if needed
  const shortCaption =
    caption.length > 120 ? caption.substring(0, 120) + "..." : caption;

  const srcToUse = getLocalImagePath(imageUrl);

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
      {/* Instagram post image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={srcToUse}
          alt={`Instagram post by ${username}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          priority
        />
      </div>

      <div className="p-4 sm:p-6">
        {/* Caption only */}
        <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-600 line-clamp-3">
          {shortCaption}
        </p>

        {/* View on Instagram button */}
        <a
          href={postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm sm:text-base text-blue-600 hover:text-blue-700 transition-colors duration-200"
        >
          Bekijk op Instagram
          <Instagram className="ml-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
        </a>
      </div>
    </article>
  );
}

// Client component to fetch and display instagram posts
export function InstagramFeed({
  username = "patrickderoersopperssg",
  count = 3,
}: {
  username?: string;
  count?: number;
}) {
  const [posts, setPosts] = useState<InstagramPostProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Placeholder posts for fallback
  const placeholderPosts: InstagramPostProps[] = [
    {
      username: "patrickderoersopperssg",
      imageUrl: "/images/training.jpg",
      caption:
        "Clubkampioenschappen - Op zondag 30 maart vonden de clubkampioenschappen van SG Patrick – de Roersoppers plaats in Melick. Het was een super gezellige en sportieve middag. Naast het zwemmen werd ook het traditionele munten duiken georganiseerd.",
      timestamp: "30 maart 2024",
      postUrl: `https://www.instagram.com/${username}/`,
    },
    {
      username: "patrickderoersopperssg",
      imageUrl: "/images/Wedstrijd.jpg",
      caption:
        "200m KST - Waar de meeste zwemmers en zwemsters van SG Patrick – de Roersoppers aanwezig waren op de eigen Clubkampioenschappen, kozen Jana en Gido voor een wedstrijd in het buitenland. Deze twee reisden af naar het Optimum Energy Race in Eindhoven.",
      timestamp: "1 april 2024",
      postUrl: `https://www.instagram.com/${username}/`,
    },
    {
      username: "patrickderoersopperssg",
      imageUrl: "/images/senioren.jpg",
      caption:
        "Competitie Deel 5 - De eerste vier wedstrijden in de Nationale Zwemcompetitie gingen voor onze startgemeenschap meer dan goed. Op 6 april was het tijd voor de laatste ronde.",
      timestamp: "6 april 2024",
      postUrl: `https://www.instagram.com/${username}/`,
    },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError("");

        // Add timeout to avoid waiting too long
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

        const res = await fetch(
          `/api/instagram-posts?username=${encodeURIComponent(
            username
          )}&limit=${count}`,
          { signal: controller.signal }
        );

        clearTimeout(timeoutId);

        if (!res.ok) throw new Error("Failed to load Instagram posts");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setPosts(data as InstagramPostProps[]);
        } else {
          setPosts(placeholderPosts.slice(0, count));
        }
      } catch (e) {
        console.error(e);
        if (e instanceof Error && e.name === "AbortError") {
          setError("Instagram posts laden te lang. We tonen voorbeelden.");
        } else {
          setError("Kon Instagram berichten niet laden. We tonen voorbeelden.");
        }
        setPosts(placeholderPosts.slice(0, count));
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, count]);

  if (loading) {
    return (
      <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl bg-gray-100 shadow-lg h-48 sm:h-64 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (error && !posts) {
    return (
      <div className="text-center text-red-500 text-sm sm:text-base px-4">
        {error}
      </div>
    );
  }

  const toRender = posts ?? placeholderPosts.slice(0, count);

  return (
    <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {toRender.map((post, index) => (
        <InstagramPost key={index} {...post} />
      ))}
    </div>
  );
}
