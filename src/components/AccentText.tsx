import { Fragment } from 'react'

import { SmartLink } from '@/components/SmartLink'

// Plain-text fields support **accent** (blue bold) and [label](url) links
const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/

export function AccentText({ text }: { text?: string | null }) {
  if (!text) return null
  return (
    <>
      {text.split(pattern).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <span key={i} className="font-bold text-blue-600">
              {part.slice(2, -2)}
            </span>
          )
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/)
        if (link) {
          return (
            <SmartLink
              key={i}
              href={link[2]}
              className="text-cyan-600 hover:text-cyan-700 underline font-semibold"
            >
              {link[1]}
            </SmartLink>
          )
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}
