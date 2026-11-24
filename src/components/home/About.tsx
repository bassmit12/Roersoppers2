'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

import { Icon } from '@/components/Icon'
import { asMedia } from '@/lib/media'
import { featureColors } from '@/lib/styles'
import type { Home } from '@/payload-types'

import { SectionBackground, SectionHeader } from './SectionHeader'

export function About({ about }: { about: Home['about'] }) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden"
    >
      <SectionBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader section={about} isInView={isInView} />

        {/* Features Grid - Hidden on mobile */}
        {!!about.features?.length && (
          <motion.div
            className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {about.features.map((feature, index) => {
              const colors = featureColors[feature.color ?? 'blue'] ?? featureColors.blue
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="group p-4 sm:p-6 md:p-8 bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/40"
                >
                  <div
                    className={`inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 ${colors.bg} rounded-xl mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon name={feature.icon} className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.icon}`} />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        )}

        {/* Training Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          {about.photos?.map((photo, index) => {
            const image = asMedia(photo.image)
            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="aspect-[4/3] relative">
                    {image?.url && (
                      <Image
                        src={image.url}
                        alt={image.alt || photo.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                      <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                        {photo.title}
                      </h3>
                      {photo.caption && (
                        <p className="text-sm sm:text-base text-white/90">{photo.caption}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
