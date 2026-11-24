import Link from 'next/link'
import type { ComponentProps } from 'react'

const opensInNewTab = (href: string) =>
  href.startsWith('http') || href.startsWith('/api/media/file/')

// Next.js Link for pages, a plain anchor for files, mail and external sites
export function SmartLink({ href, ...props }: ComponentProps<'a'> & { href: string }) {
  if (opensInNewTab(href)) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
  }
  if (href.startsWith('/') || href.startsWith('#')) return <Link href={href} {...props} />
  return <a href={href} {...props} />
}
