import { revalidatePath } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
  PayloadRequest,
} from 'payload'

// The site is small, so any content change revalidates every page.
const revalidateSite = (req: PayloadRequest, context: Record<string, unknown>) => {
  if (context.disableRevalidate) return
  try {
    revalidatePath('/', 'layout')
  } catch {
    // Not running inside Next.js (e.g. `npm run seed`): nothing to revalidate
    req.payload.logger.debug('Skipped revalidation outside of Next.js')
  }
}

export const revalidateAfterChange: CollectionAfterChangeHook = ({ doc, req, context }) => {
  revalidateSite(req, context)
  return doc
}

export const revalidateAfterDelete: CollectionAfterDeleteHook = ({ doc, req, context }) => {
  revalidateSite(req, context)
  return doc
}

export const revalidateGlobal: GlobalAfterChangeHook = ({ doc, req, context }) => {
  revalidateSite(req, context)
  return doc
}
