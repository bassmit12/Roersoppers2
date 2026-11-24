'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { accentHoverOverlays } from '@/lib/styles'
import { cn } from '@/lib/utils'
import type { Media } from '@/payload-types'

// Photo with a dark gradient and caption, used for groups and the pool
export function PhotoTile({
  image,
  title,
  caption,
  accent = 'blue-cyan',
  delay,
  isInView,
  sizes,
}: {
  image: Media | null
  title: string
  caption?: string | null
  accent?: string
  delay: number
  isInView: boolean
  sizes: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="aspect-[4/3] relative">
        {image?.url && (
          <Image
            src={image.url}
            alt={image.alt || title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes={sizes}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
        <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">{title}</h3>
        {caption && (
          <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-relaxed">{caption}</p>
        )}
      </div>
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          accentHoverOverlays[accent],
        )}
      />
    </motion.div>
  )
}
