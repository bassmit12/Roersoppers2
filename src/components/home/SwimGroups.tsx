'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

import { asMedia } from '@/lib/media'
import type { Home } from '@/payload-types'

import { PhotoTile } from './PhotoTile'
import { SectionBackground, SectionHeader } from './SectionHeader'

export function SwimGroups({ groups }: { groups: Home['groups'] }) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="groups"
      ref={ref}
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50 overflow-hidden"
    >
      <SectionBackground flip />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader section={groups} isInView={isInView} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {groups.items?.map((group, index) => (
            <PhotoTile
              key={group.id}
              image={asMedia(group.image)}
              title={group.title}
              caption={group.description}
              accent={group.accent}
              delay={0.4 + index * 0.1}
              isInView={isInView}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
