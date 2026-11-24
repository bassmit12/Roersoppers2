'use client'

import { motion, useInView } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { useMemo, useRef } from 'react'

import { asMedia } from '@/lib/media'
import type { Home } from '@/payload-types'

import { InstagramFeed, type InstagramPostProps } from './InstagramFeed'
import { SectionBackground, SectionHeader } from './SectionHeader'

export function Events({ events }: { events: Home['events'] }) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const username = events.instagramUsername.replace(/^@/, '')
  const profileUrl = `https://www.instagram.com/${username}/`

  const fallbackPosts = useMemo<InstagramPostProps[]>(
    () =>
      (events.fallbackPosts ?? []).flatMap((post) => {
        const image = asMedia(post.image)
        return image?.url
          ? [{ username, imageUrl: image.url, caption: post.caption, postUrl: profileUrl }]
          : []
      }),
    [events.fallbackPosts, username, profileUrl],
  )

  return (
    <section
      id="events"
      ref={ref}
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden"
    >
      <SectionBackground flip />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader section={events} isInView={isInView} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 sm:mb-16"
        >
          <InstagramFeed
            username={username}
            count={events.postCount ?? 3}
            fallbackPosts={fallbackPosts}
          />
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
            {events.followLabel || 'Volg ons op Instagram'}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
