'use client'

import { Instagram } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export interface InstagramPostProps {
  username: string
  imageUrl: string
  caption: string
  timestamp?: string
  postUrl: string
}

export function InstagramPost({ username, imageUrl, caption, postUrl }: InstagramPostProps) {
  const shortCaption = caption.length > 120 ? caption.substring(0, 120) + '...' : caption

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Instagram post by ${username}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-4 sm:p-6">
        <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-600 line-clamp-3">
          {shortCaption}
        </p>

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
  )
}

export function InstagramFeed({
  username,
  count = 3,
  fallbackPosts,
}: {
  username: string
  count?: number
  // Shown when the Instagram API is unavailable, managed in the CMS
  fallbackPosts: InstagramPostProps[]
}) {
  const [posts, setPosts] = useState<InstagramPostProps[] | null>(null)

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000)

    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/instagram-posts?limit=${count}`, {
          signal: controller.signal,
        })
        if (!res.ok) throw new Error('Failed to load Instagram posts')
        const data = await res.json()
        if (cancelled) return
        setPosts(Array.isArray(data) && data.length > 0 ? data : fallbackPosts.slice(0, count))
      } catch (e) {
        // Unmounted (or re-run by StrictMode): nothing to show or report
        if (cancelled) return
        console.error(e)
        setPosts(fallbackPosts.slice(0, count))
      } finally {
        clearTimeout(timeoutId)
      }
    }

    fetchPosts()
    return () => {
      cancelled = true
      clearTimeout(timeoutId)
      controller.abort()
    }
  }, [username, count, fallbackPosts])

  if (!posts) {
    return (
      <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="rounded-2xl bg-gray-100 shadow-lg h-48 sm:h-64 animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <InstagramPost key={index} {...post} />
      ))}
    </div>
  )
}
