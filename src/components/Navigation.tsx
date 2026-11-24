'use client'

import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import type { Navigation as NavigationData } from '@/payload-types'

type NavigationItem = NonNullable<NavigationData['items']>[number]

export function Navigation({
  items,
  siteName,
}: {
  items: NavigationItem[]
  siteName?: string | null
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const isSolid = isScrolled || pathname !== '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        isSolid
          ? 'bg-white/98 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src="/logo.png"
              alt={siteName ?? ''}
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span
              className={cn(
                'text-xl font-bold transition-colors duration-500',
                isSolid ? 'text-[var(--primary-blue)]' : 'text-white',
              )}
            >
              {siteName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {items.map((item) => (
                <div key={item.id ?? item.label} className="relative group">
                  {item.children?.length ? (
                    <div className="relative">
                      <button
                        className={cn(
                          'flex items-center px-3 py-2 text-sm font-medium transition-all duration-500',
                          isSolid
                            ? 'text-gray-900 hover:text-[var(--aqua)]'
                            : 'text-white/90 hover:text-white',
                        )}
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onFocus={() => setActiveDropdown(item.label)}
                        aria-expanded={activeDropdown === item.label}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      <div
                        className={cn(
                          'absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg ring-1 ring-black/5 transition-all duration-200 z-50',
                          activeDropdown === item.label
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2 pointer-events-none',
                        )}
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.id ?? child.label}
                              href={child.url}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--aqua)]/10 hover:text-[var(--aqua)] transition-colors duration-200"
                              onClick={handleLinkClick}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.url || '/'}
                      className={cn(
                        'relative px-3 py-2 text-sm font-medium transition-all duration-500 group',
                        isSolid
                          ? 'text-gray-900 hover:text-[var(--aqua)]'
                          : 'text-white/90 hover:text-white',
                      )}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[var(--aqua)] to-[var(--teal)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Menu sluiten' : 'Menu openen'}
              aria-expanded={isOpen}
              className={cn(
                'inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--aqua)] transition-colors duration-500',
                isSolid
                  ? 'text-gray-400 hover:text-gray-500 hover:bg-gray-100'
                  : 'text-white/80 hover:text-white hover:bg-white/10',
              )}
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden',
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto">
            {items.map((item) => (
              <div key={item.id ?? item.label}>
                {item.children?.length ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={activeDropdown === item.label}
                      className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 hover:text-[var(--aqua)] hover:bg-gray-50 rounded-md transition-colors duration-300"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform duration-200',
                          activeDropdown === item.label ? 'rotate-180' : '',
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'ml-4 space-y-1 overflow-hidden transition-all duration-200',
                        activeDropdown === item.label
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0',
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.id ?? child.label}
                          href={child.url}
                          className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[var(--aqua)] hover:bg-gray-50 rounded-md transition-colors duration-300"
                          onClick={handleLinkClick}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.url || '/'}
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-[var(--aqua)] hover:bg-gray-50 rounded-md transition-colors duration-300"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
