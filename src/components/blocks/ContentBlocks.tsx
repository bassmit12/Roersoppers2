import { Download as DownloadIcon, FileText } from 'lucide-react'
import type { CSSProperties } from 'react'

import { Icon } from '@/components/Icon'
import { RichText } from '@/components/RichText'
import { SmartLink } from '@/components/SmartLink'
import { linkify } from '@/lib/linkify'
import { asMedia } from '@/lib/media'
import { cn } from '@/lib/utils'
import type {
  ButtonBlock,
  CalloutBlock,
  CardBlock,
  DownloadBlock,
  NameGridBlock,
  TableBlock,
} from '@/payload-types'

const widths: Record<string, string> = {
  full: 'md:col-span-6',
  half: 'md:col-span-3',
  third: 'md:col-span-2',
}

const calloutStyles: Record<string, { box: string; icon: string; check: string }> = {
  blue: {
    box: 'bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500',
    icon: 'text-blue-600',
    check: '#2563eb',
  },
  cyan: {
    box: 'bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-l-4 border-cyan-500',
    icon: 'text-cyan-600',
    check: '#0891b2',
  },
  soft: {
    box: 'bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 sm:p-8',
    icon: 'text-blue-600',
    check: '#2563eb',
  },
  amber: {
    box: 'bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 sm:p-8 border-l-4 border-amber-500',
    icon: 'text-amber-600',
    check: '#d97706',
  },
  white: {
    box: 'bg-white rounded-lg p-5 border-2 border-amber-200 font-semibold',
    icon: 'text-amber-600',
    check: '#d97706',
  },
  slate: { box: 'bg-slate-50 rounded-xl p-6 sm:p-8', icon: 'text-slate-600', check: '#475569' },
  solid: {
    box: 'bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 rounded-2xl p-6 sm:p-8 text-white',
    icon: 'text-white',
    check: '#ffffff',
  },
  tile: {
    box: 'bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8',
    icon: 'text-white',
    check: '#06b6d4',
  },
  note: { box: '', icon: 'text-slate-500', check: '#64748b' },
}

const tableStyles: Record<string, { head: string; border: string; hover: string }> = {
  blue: { head: 'from-blue-100 to-cyan-100', border: 'border-blue-200', hover: 'hover:bg-blue-50' },
  cyan: { head: 'from-cyan-100 to-blue-100', border: 'border-cyan-200', hover: 'hover:bg-cyan-50' },
  teal: { head: 'from-teal-100 to-cyan-100', border: 'border-teal-200', hover: 'hover:bg-teal-50' },
}

function IconTile({ block }: { block: CalloutBlock }) {
  return (
    <div
      className={calloutStyles.tile.box}
      style={{ '--check-color': calloutStyles.tile.check } as CSSProperties}
    >
      <div className="flex items-start gap-4">
        {block.icon && (
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg flex-shrink-0">
            <Icon name={block.icon} className="h-6 w-6 text-white" />
          </div>
        )}
        <div className="space-y-2">
          {block.title && <h3 className="text-xl font-bold text-slate-900">{block.title}</h3>}
          <RichText
            data={block.content}
            listStyle={block.listStyle}
            className="text-slate-700 [&>*+*]:mt-1"
          />
        </div>
      </div>
    </div>
  )
}

function Callout({ block }: { block: CalloutBlock }) {
  if (block.variant === 'tile') return <IconTile block={block} />
  if (block.variant === 'note') {
    return <RichText data={block.content} className="text-sm text-slate-500 italic" />
  }

  const style = calloutStyles[block.variant] ?? calloutStyles.blue
  const solid = block.variant === 'solid'
  const centered = block.align === 'center'

  return (
    <div
      className={cn(style.box, centered && 'text-center')}
      style={{ '--check-color': style.check } as CSSProperties}
    >
      {block.title && (
        <h3
          className={cn(
            'font-bold mb-4 flex items-center gap-3',
            solid ? 'text-2xl text-white' : 'text-xl text-slate-900',
            centered && 'justify-center',
          )}
        >
          <Icon name={block.icon} className={cn('h-7 w-7 flex-shrink-0', style.icon)} />
          {block.title}
        </h3>
      )}
      <div className={cn(!block.title && block.icon && 'flex items-center gap-3')}>
        {!block.title && (
          <Icon name={block.icon} className={cn('h-6 w-6 flex-shrink-0', style.icon)} />
        )}
        <RichText
          data={block.content}
          listStyle={block.listStyle}
          inverted={solid}
          className={cn('text-lg', solid ? 'text-white/90' : 'text-slate-700')}
        />
      </div>
    </div>
  )
}

function Table({ block }: { block: TableBlock }) {
  if (block.style === 'lines') return <LinedTable block={block} />
  const style = tableStyles[block.variant] ?? tableStyles.blue

  return (
    <div className="space-y-4">
      <TableTitle block={block} />
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className={cn('bg-gradient-to-r', style.head)}>
              {block.columns?.map((column) => (
                <th
                  key={column.id}
                  className={cn('text-left p-4 font-bold text-slate-900 border', style.border)}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {block.rows?.map((row) => (
              <tr key={row.id} className={style.hover}>
                {row.cells?.map((cell) => (
                  <td
                    key={cell.id}
                    colSpan={cell.colSpan ?? 1}
                    className={cn('p-4 border', style.border, cell.emphasis && 'font-semibold')}
                  >
                    {cell.value?.split('\n').map((line, i) => (
                      <span key={i} className="block">
                        {linkify(line, 'text-blue-600 hover:text-blue-700 underline')}
                      </span>
                    ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const linedTableStyles: Record<string, { head: string; border: string; hover: string }> = {
  blue: {
    head: 'from-blue-50 to-cyan-50',
    border: 'border-blue-200',
    hover: 'hover:bg-blue-50/50',
  },
  cyan: {
    head: 'from-cyan-50 to-blue-50',
    border: 'border-cyan-200',
    hover: 'hover:bg-cyan-50/50',
  },
  teal: {
    head: 'from-teal-50 to-cyan-50',
    border: 'border-teal-200',
    hover: 'hover:bg-teal-50/50',
  },
}

const titleIconColors: Record<string, string> = {
  blue: 'text-blue-600',
  cyan: 'text-cyan-600',
  teal: 'text-teal-600',
}

function TableTitle({ block }: { block: TableBlock }) {
  if (!block.title) return null
  const lined = block.style === 'lines'

  return (
    <h3
      className={cn(
        'font-bold text-slate-900',
        lined ? 'text-xl flex flex-wrap items-center gap-2' : 'text-2xl',
      )}
    >
      <Icon name={block.icon} className={cn('h-6 w-6', titleIconColors[block.variant])} />
      {block.title}{' '}
      {block.titleNote && (
        <span
          className={cn(
            'font-normal',
            lined ? 'text-sm text-slate-500' : 'text-base text-slate-600',
          )}
        >
          {block.titleNote}
        </span>
      )}
    </h3>
  )
}

function LinedTable({ block }: { block: TableBlock }) {
  const style = linedTableStyles[block.variant] ?? linedTableStyles.blue

  return (
    <div className="space-y-4">
      <TableTitle block={block} />
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className={cn('bg-gradient-to-r', style.head)}>
              {block.columns?.map((column) => (
                <th
                  key={column.id}
                  className={cn('px-4 py-3 text-slate-900 font-bold border-b-2', style.border)}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {block.rows?.map((row) => (
              <tr
                key={row.id}
                className={cn(
                  'border-b border-slate-100 last:border-b-0 transition-colors',
                  style.hover,
                )}
              >
                {row.cells?.map((cell, i) => (
                  <td
                    key={cell.id}
                    colSpan={cell.colSpan ?? 1}
                    className={cn(
                      'px-4 py-3',
                      cell.emphasis ? 'font-semibold' : i === 0 && 'font-medium',
                    )}
                  >
                    {cell.value?.split('\n').map((line, j) => (
                      <span key={j} className="block">
                        {linkify(line, 'text-cyan-600 hover:text-cyan-700 underline')}
                      </span>
                    ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const buttonClassName =
  'inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl'

function Button({ block }: { block: ButtonBlock }) {
  return (
    <div className={cn(block.align === 'center' && 'text-center pt-2')}>
      <SmartLink
        href={block.url}
        className={cn(
          buttonClassName,
          block.align === 'center' && 'font-bold px-8 py-4 text-lg hover:-translate-y-1',
        )}
      >
        <Icon name={block.icon} className="h-5 w-5" />
        {block.label}
      </SmartLink>
    </div>
  )
}

function Download({ block }: { block: DownloadBlock }) {
  const file = asMedia(block.file)

  if (block.style === 'button') {
    return file?.url ? (
      <a href={file.url} download className={buttonClassName}>
        <DownloadIcon className="h-5 w-5" />
        {block.buttonLabel}
      </a>
    ) : null
  }

  return (
    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 sm:p-8 text-center">
      <FileText className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-slate-900 mb-4">{block.title}</h3>
      {file?.url && (
        <a
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-xl font-semibold transition-all shadow-lg"
        >
          <FileText className="h-5 w-5" />
          {block.buttonLabel}
        </a>
      )}
    </div>
  )
}

function NameGrid({ block }: { block: NameGridBlock }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 sm:p-8">
      {block.title && <h4 className="text-lg font-bold text-slate-900 mb-4">{block.title}</h4>}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {block.names?.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-3 text-slate-700 font-medium border border-blue-200"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export function ContentBlocks({ blocks }: { blocks: CardBlock['content'] }) {
  if (!blocks?.length) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
      {blocks.map((block) => (
        <div key={block.id} className={widths[block.width] ?? widths.full}>
          {block.blockType === 'richText' && (
            <RichText
              data={block.content}
              listStyle={block.listStyle}
              className="text-slate-700 text-lg"
            />
          )}
          {block.blockType === 'callout' && <Callout block={block} />}
          {block.blockType === 'table' && <Table block={block} />}
          {block.blockType === 'download' && <Download block={block} />}
          {block.blockType === 'nameGrid' && <NameGrid block={block} />}
          {block.blockType === 'button' && <Button block={block} />}
        </div>
      ))}
    </div>
  )
}
