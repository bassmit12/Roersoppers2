import { AccentText } from '@/components/AccentText'
import { Icon } from '@/components/Icon'
import type { Page } from '@/payload-types'

import { FadeIn } from './FadeIn'

export function PageHero({ hero }: { hero: Page['hero'] }) {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.2} className="text-center">
          {hero.icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl">
              <Icon name={hero.icon} className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
            {hero.titleLead && (
              <>
                <span className="text-slate-900">{hero.titleLead}</span>
                <br />
              </>
            )}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              {hero.title}
            </span>
          </h1>

          {hero.subtitle?.split(/\n\s*\n/).map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? 'text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4'
                  : 'text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 mt-4'
              }
            >
              <AccentText text={paragraph} />
            </p>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}
