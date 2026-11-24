import config from '@payload-config'
import { getPayload, type GlobalSlug } from 'payload'
import { cache } from 'react'

export const getPayloadClient = () => getPayload({ config })

// Cached per request so layout and page can share the same global lookups
export const getGlobal = cache(async <T extends GlobalSlug>(slug: T) => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug, depth: 1 })
})

export const getPageBySlug = cache(async (slug: string) => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  })
  return docs[0] ?? null
})
