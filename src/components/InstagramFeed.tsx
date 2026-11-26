"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

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

// Space between cards in px, matches the gap-6 class on the track
const CARD_GAP = 24;

// Horizontally scrolling row of posts: 1 card on phones, 2 on tablets, 3 on desktop
function InstagramCarousel({ posts }: { posts: InstagramPostProps[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [positions, setPositions] = useState(1);

  const getStep = () => {
    const card = trackRef.current?.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + CARD_GAP : 0;
  };

  const update = useCallback(() => {
    const track = trackRef.current;
    const step = getStep();
    if (!track || !step) return;
    const visible = Math.max(1, Math.round((track.clientWidth + CARD_GAP) / step));
    setPositions(Math.max(1, posts.length - visible + 1));
    setPosition(Math.round(track.scrollLeft / step));
  }, [posts.length]);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollToPosition = (index: number) => {
    trackRef.current?.scrollTo({ left: index * getStep(), behavior: "smooth" });
  };

  const buttonClasses =
    "absolute top-1/3 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg transition-all duration-200 hover:bg-blue-50 hover:scale-105 disabled:pointer-events-none disabled:opacity-0";

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Instagram berichten"
    >
      <div
        ref={trackRef}
        onScroll={update}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-2 pt-2 pb-6 -mx-2 scroll-px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((post, index) => (
          <div
            key={post.postUrl + index}
            className="snap-start shrink-0 w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            aria-label={`Bericht ${index + 1} van ${posts.length}`}
          >
            <InstagramPost {...post} />
          </div>
        ))}
      </div>

      {positions > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollToPosition(position - 1)}
            disabled={position === 0}
            aria-label="Vorige berichten"
            className={`${buttonClasses} left-0 -translate-x-1/2`}
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            type="button"
            onClick={() => scrollToPosition(position + 1)}
            disabled={position >= positions - 1}
            aria-label="Volgende berichten"
            className={`${buttonClasses} right-0 translate-x-1/2`}
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <div className="flex justify-center">
            {Array.from({ length: positions }).map((_, i) => (
              // The button is a large tap target; the span is the visible dot
              <button
                key={i}
                type="button"
                onClick={() => scrollToPosition(i)}
                aria-label={`Ga naar bericht ${i + 1}`}
                aria-current={i === position}
                className="group flex h-8 items-center justify-center px-1"
              >
                <span
                  className={`block h-2.5 rounded-full transition-all duration-300 ${
                    i === position
                      ? "w-8 bg-gradient-to-r from-blue-500 to-cyan-500"
                      : "w-2.5 bg-blue-200 group-hover:bg-blue-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
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
      <div className="flex gap-6 overflow-hidden pt-2 pb-6">
        {Array.from({ length: Math.min(count, 3) }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] rounded-2xl bg-gray-100 shadow-lg h-48 sm:h-64 animate-pulse"
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

  return <InstagramCarousel posts={toRender} />;
}
