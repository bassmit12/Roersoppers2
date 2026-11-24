'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

import { asMedia } from '@/lib/media'
import { accentGradients } from '@/lib/styles'
import type { SwimGroup } from '@/payload-types'

export function SwimGroupsList({ groups }: { groups: SwimGroup[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="space-y-12 md:space-y-20">
      {groups.map((group, index) => {
        const image = asMedia(group.image)
        const gradient = accentGradients[group.accent] ?? accentGradients['blue-cyan']

        return (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-8 items-center bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 h-72 lg:h-[450px] relative overflow-hidden group">
              {image?.url && (
                <Image
                  src={image.url}
                  alt={image.alt || group.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading={index === 0 ? 'eager' : undefined}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white drop-shadow-2xl mb-2">
                  {group.title}
                </h2>
                <div className={`h-1.5 w-24 bg-gradient-to-r ${gradient} rounded-full shadow-lg`} />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                    {group.description}
                  </p>
                  {group.details && (
                    <div className="pt-4 border-t border-slate-200">
                      <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                        {group.details}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <div className={`h-1 w-20 bg-gradient-to-r ${gradient} rounded-full`} />
                  <div
                    className={`h-1 w-10 bg-gradient-to-r ${gradient} opacity-50 rounded-full`}
                  />
                  <div className={`h-1 w-5 bg-gradient-to-r ${gradient} opacity-25 rounded-full`} />
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
