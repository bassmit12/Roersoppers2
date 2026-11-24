import {
  type JSXConvertersFunction,
  LinkJSXConverter,
  RichText as LexicalRichText,
} from '@payloadcms/richtext-lexical/react'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({
    internalDocToHref: ({ linkNode }) => {
      const doc = linkNode.fields.doc?.value
      return doc && typeof doc === 'object' && 'slug' in doc ? `/${doc.slug}` : '/'
    },
  }),
})

export function RichText({
  data,
  className,
  listStyle,
  inverted,
}: {
  data?: ComponentProps<typeof LexicalRichText>['data'] | null
  className?: string
  listStyle?: string | null
  inverted?: boolean
}) {
  if (!data) return null
  return (
    <div
      className={cn('rich-text leading-relaxed', inverted && 'rich-text-inverted', className)}
      data-list-style={listStyle ?? undefined}
    >
      <LexicalRichText data={data} converters={converters} disableContainer />
    </div>
  )
}
