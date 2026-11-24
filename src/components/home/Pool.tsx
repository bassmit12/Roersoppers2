'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

import { asMedia } from '@/lib/media'
import type { Home } from '@/payload-types'

import { PhotoTile } from './PhotoTile'
import { SectionBackground, SectionHeader } from './SectionHeader'

export function Pool({ pool }: { pool: Home['pool'] }) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="pool"
      ref={ref}
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden"
    >
      <SectionBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader section={pool} isInView={isInView} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16 lg:mb-20 max-w-5xl mx-auto">
          {pool.photos?.map((photo, index) => (
            <PhotoTile
              key={photo.id}
              image={asMedia(photo.image)}
              title={photo.title}
              caption={photo.caption}
              accent={index % 2 === 0 ? 'blue-cyan' : 'cyan-teal'}
              delay={0.4 + index * 0.1}
              isInView={isInView}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
