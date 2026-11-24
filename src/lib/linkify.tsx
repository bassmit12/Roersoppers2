import { Fragment } from 'react'

const pattern = /([\w.+-]+@[\w-]+\.[\w.-]+|https?:\/\/[^\s]+)/g

// Turns e-mail addresses and URLs in plain text into links
export function linkify(text: string, linkClassName: string) {
  return text.split(pattern).map((part, i) => {
    if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>
    const isEmail = !part.startsWith('http')
    return (
      <a
        key={i}
        href={isEmail ? `mailto:${part}` : part}
        className={linkClassName}
        {...(isEmail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {part}
      </a>
    )
  })
}
