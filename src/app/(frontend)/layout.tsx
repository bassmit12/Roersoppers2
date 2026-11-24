import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'

import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { getGlobal } from '@/lib/payload'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getGlobal('site-settings')
  const title = settings.meta?.title || settings.siteName || 'De Roersoppers'
  return {
    title: { default: title, template: `%s | ${settings.siteName || 'De Roersoppers'}` },
    description: settings.meta?.description,
    keywords: settings.meta?.keywords,
    icons: { icon: '/logo.ico', shortcut: '/logo.ico', apple: '/logo.ico' },
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1e40af',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [navigation, settings] = await Promise.all([
    getGlobal('navigation'),
    getGlobal('site-settings'),
  ])

  return (
    <html lang="nl">
      <body className={`${poppins.variable} antialiased font-sans`}>
        <div className="min-h-screen">
          <Navigation items={navigation.items ?? []} siteName={settings.siteName} />
          {children}
          <Footer settings={settings} />
        </div>
      </body>
    </html>
  )
}
