import Image from 'next/image'

import { FadeIn } from '@/components/FadeIn'
import { Icon } from '@/components/Icon'
import { RichText } from '@/components/RichText'
import { SmartLink } from '@/components/SmartLink'
import { days } from '@/collections/TrainingSessions'
import { asMedia } from '@/lib/media'
import { getPayloadClient } from '@/lib/payload'
import { cardHeaderGradients } from '@/lib/styles'
import type { CardBlock, CtaBlock, InfoPanelBlock, MediaCardBlock, Page } from '@/payload-types'

import { ContentBlocks } from './ContentBlocks'
import { SwimGroupsList } from './SwimGroupsList'
import { type ScheduleDay, TrainingSchedule } from './TrainingSchedule'

function Card({ block }: { block: CardBlock }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      {block.title && (
        <div
          className={`bg-gradient-to-r ${cardHeaderGradients[block.headerStyle] ?? cardHeaderGradients.blue} px-6 sm:px-8 py-6`}
        >
          <div className="flex items-center gap-3">
            <Icon name={block.icon} className="h-8 w-8 text-white flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{block.title}</h2>
          </div>
        </div>
      )}
      <div className="p-6 sm:p-8 lg:p-10">
        <ContentBlocks blocks={block.content} />
      </div>
    </div>
  )
}

function MediaCard({ block }: { block: MediaCardBlock }) {
  const image = asMedia(block.image)

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-72 lg:h-auto lg:min-h-96 relative overflow-hidden group">
          {image?.url && (
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="eager"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {block.badge && (
            <div className="absolute bottom-6 left-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                {block.badge}
              </span>
            </div>
          )}
        </div>
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10">
          <RichText
            data={block.content}
            listStyle={block.listStyle}
            className="text-slate-700 text-lg [--check-color:#06b6d4] [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_strong]:text-xl [&_strong]:text-blue-600"
          />
        </div>
      </div>
    </div>
  )
}

function Cta({ block }: { block: CtaBlock }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 rounded-2xl p-6 sm:p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-3">{block.title}</h3>
      {block.text && <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">{block.text}</p>}
      {block.link?.url && (
        <SmartLink
          href={block.link.url}
          className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
        >
          <Icon name={block.link.icon} className="h-5 w-5" />
          {block.link.label}
        </SmartLink>
      )}
    </div>
  )
}

function InfoPanel({ block }: { block: InfoPanelBlock }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 lg:p-12 text-center">
      <RichText
        data={block.content}
        className="text-slate-700 text-lg sm:text-xl max-w-3xl mx-auto"
      />
      {block.link?.url && (
        <SmartLink
          href={block.link.url}
          className="inline-block mt-6 px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white font-bold rounded-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg"
        >
          {block.link.label}
        </SmartLink>
      )}
    </div>
  )
}

async function SwimGroupsSection() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'swim-groups',
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return <SwimGroupsList groups={docs} />
}

async function TrainingScheduleSection({ title }: { title: string }) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'training-sessions',
    sort: 'startTime',
    limit: 500,
    depth: 1,
  })

  const schedule: ScheduleDay[] = days.map((day) => ({
    label: day.label,
    sessions: docs
      .filter((session) => session.day === day.value)
      .map((session) => ({
        id: session.id,
        time: `${session.startTime} - ${session.endTime}`,
        groups: (session.groups ?? [])
          .map((group) => (typeof group === 'object' ? group.title : ''))
          .filter(Boolean)
          .join(' / '),
      })),
  }))

  return <TrainingSchedule title={title} days={schedule} />
}

export function RenderBlocks({ blocks }: { blocks: Page['layout'] }) {
  if (!blocks?.length) return null

  return (
    <div className="space-y-8 sm:space-y-12">
      {blocks.map((block, index) => {
        const delay = 0.4 + index * 0.1
        switch (block.blockType) {
          case 'card':
            return (
              <FadeIn key={block.id} delay={delay}>
                <Card block={block} />
              </FadeIn>
            )
          case 'mediaCard':
            return (
              <FadeIn key={block.id} delay={delay}>
                <MediaCard block={block} />
              </FadeIn>
            )
          case 'cta':
            return (
              <FadeIn key={block.id} delay={delay}>
                <Cta block={block} />
              </FadeIn>
            )
          case 'infoPanel':
            return (
              <FadeIn key={block.id} delay={delay}>
                <InfoPanel block={block} />
              </FadeIn>
            )
          case 'swimGroups':
            return <SwimGroupsSection key={block.id} />
          case 'trainingSchedule':
            return <TrainingScheduleSection key={block.id} title={block.title} />
          default:
            return null
        }
      })}
    </div>
  )
}
