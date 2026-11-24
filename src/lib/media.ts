import type { Media } from '@/payload-types'

// Upload fields are either a populated document or just its id
export const asMedia = (value: number | Media | null | undefined): Media | null =>
  value && typeof value === 'object' ? value : null
