import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { PageHero } from '@/components/PageHero'
import { getPageBySlug, getPayloadClient } from '@/lib/payload'

type Args = { params: Promise<{ slug: string[] }> }

export async function generateStaticParams() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'pages',
    limit: 1000,
    pagination: false,
    select: { slug: true },
  })
  return docs.map((doc) => ({ slug: doc.slug.split('/') }))
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlug(slug.join('/'))
  if (!page) return {}
  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description || page.hero.subtitle || undefined,
  }
}

export default async function Page({ params }: Args) {
  const { slug } = await params
  const page = await getPageBySlug(slug.join('/'))
  if (!page) notFound()

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50">
      <main className="pt-20">
        <PageHero hero={page.hero} />
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <RenderBlocks blocks={page.layout} />
        </section>
      </main>
    </div>
  )
}
