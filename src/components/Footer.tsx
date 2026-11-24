import { Mail, MapPin, Phone } from 'lucide-react'
import { SmartLink } from '@/components/SmartLink'

import { Icon } from '@/components/Icon'
import type { SiteSetting } from '@/payload-types'

// Fixed values so server and client render the same bubbles
const bubbles = [
  { size: 46, left: 8, bottom: 12, duration: 14 },
  { size: 28, left: 21, bottom: 40, duration: 18 },
  { size: 64, left: 35, bottom: 5, duration: 12 },
  { size: 34, left: 48, bottom: 30, duration: 19 },
  { size: 52, left: 61, bottom: 18, duration: 15 },
  { size: 24, left: 73, bottom: 45, duration: 11 },
  { size: 70, left: 84, bottom: 8, duration: 17 },
  { size: 38, left: 94, bottom: 25, duration: 13 },
]

const wavePaths = [
  'M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  'M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,128C672,149,768,171,864,165.3C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
]

export function Footer({ settings }: { settings: SiteSetting }) {
  const footer = settings.footer
  const contact = footer?.contact
  const credit = footer?.credit

  return (
    <footer className="relative bg-gradient-to-b from-[var(--primary-blue)] via-[var(--dark-blue)] to-[#0f172a] text-white overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="0.3" d={wavePaths[0]}>
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values={[wavePaths[0], wavePaths[1], wavePaths[0]].join(';')}
            />
          </path>
        </svg>
      </div>

      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 animate-float"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              bottom: `-${bubble.bottom}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${bubble.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 w-full max-w-2xl">
            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-[var(--light-aqua)]">
                Snelle Links
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                {footer?.quickLinks?.map((item) => (
                  <li key={item.id}>
                    <SmartLink
                      href={item.url}
                      className="text-white/70 hover:text-[var(--light-aqua)] transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-[var(--light-aqua)]">
                Contact
              </h4>
              <div className="space-y-3 sm:space-y-4 text-white/80 text-sm sm:text-base flex flex-col items-center">
                {contact?.location && (
                  <div className="flex items-start space-x-2 sm:space-x-3 group hover:text-white transition-colors duration-300">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--light-aqua)] mt-0.5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <p className="leading-relaxed">{contact.location}</p>
                  </div>
                )}
                {contact?.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}
                    className="flex items-center space-x-2 sm:space-x-3 group hover:text-white transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--light-aqua)] group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <span>{contact.phone}</span>
                  </a>
                )}
                {contact?.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center space-x-2 sm:space-x-3 group hover:text-white transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--light-aqua)] group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <span className="break-all">{contact.email}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-10 md:mb-12">
          {footer?.socialLinks?.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[var(--light-aqua)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[var(--light-aqua)]/50"
              aria-label={social.platform}
            >
              <Icon
                name={social.platform}
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-[var(--light-aqua)] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
            </a>
          ))}
        </div>

        {/* Wave Divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8">
          <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-[var(--light-aqua)]/30 to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
            <p className="text-white/50 text-xs sm:text-sm">
              © {new Date().getFullYear()} {settings.siteName}. Alle rechten voorbehouden.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-6 text-xs sm:text-sm">
              {footer?.legalLinks?.map((link, i) => (
                <span key={link.id} className="flex items-center gap-2 sm:gap-3 md:gap-6">
                  {i > 0 && <span className="text-white/20 hidden sm:inline">•</span>}
                  <SmartLink
                    href={link.url}
                    className="text-white/50 hover:text-[var(--light-aqua)] transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    {link.label}
                  </SmartLink>
                </span>
              ))}
            </div>
          </div>

          {credit?.name && (
            <div className="flex flex-col items-center gap-1 text-center border-t border-white/10 pt-4 sm:pt-6">
              <p className="text-white/40 text-xs">
                Gemaakt door <span className="text-white/60 font-medium">{credit.name}</span>
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs text-white/40">
                {credit.email && (
                  <a
                    href={`mailto:${credit.email}`}
                    className="hover:text-[var(--light-aqua)] transition-colors duration-300 flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3" />
                    {credit.email}
                  </a>
                )}
                {credit.email && credit.phone && <span className="text-white/20">•</span>}
                {credit.phone && (
                  <a
                    href={`tel:${credit.phone.replace(/[^+\d]/g, '')}`}
                    className="hover:text-[var(--light-aqua)] transition-colors duration-300 flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    {credit.phone}
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--aqua)] via-[var(--light-aqua)] to-[var(--teal)]"></div>
    </footer>
  )
}
