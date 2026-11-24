'use client'

import { motion } from 'framer-motion'

import { AccentText } from '@/components/AccentText'

export type SectionHeading = {
  headingLead?: string | null
  heading: string
  intro?: string | null
}

export function SectionHeader({
  section,
  isInView,
}: {
  section: SectionHeading
  isInView: boolean
}) {
  return (
    <motion.div
      className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 md:mb-6 leading-tight">
        {section.headingLead && (
          <>
            <span className="text-slate-900">{section.headingLead}</span>
            <br />
          </>
        )}
        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
          {section.heading}
        </span>
      </h2>

      {section.intro && (
        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
          <AccentText text={section.intro} />
        </p>
      )}
    </motion.div>
  )
}

export function SectionBackground({ flip = false }: { flip?: boolean }) {
  return (
    <div className="absolute inset-0">
      <div
        className={`absolute top-1/4 ${flip ? 'right-0' : 'left-0'} w-96 h-96 bg-blue-400/10 rounded-full blur-3xl`}
      />
      <div
        className={`absolute bottom-1/4 ${flip ? 'left-0' : 'right-0'} w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl`}
      />
    </div>
  )
}
