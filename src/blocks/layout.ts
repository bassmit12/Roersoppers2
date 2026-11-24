import type { Block } from 'payload'

import { iconField, linkFields } from '../fields/options'
import { contentBlocks } from './content'

// Top-level blocks that make up a page.
export const CardBlock: Block = {
  slug: 'card',
  interfaceName: 'CardBlock',
  labels: { singular: 'Kaart', plural: 'Kaarten' },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          label: 'Titel',
          type: 'text',
          admin: { width: '50%', description: 'Leeg laten voor een kaart zonder kopbalk.' },
        },
        iconField({ admin: { width: '25%' } }),
        {
          name: 'headerStyle',
          label: 'Kopkleur',
          type: 'select',
          defaultValue: 'blue',
          required: true,
          options: [
            { label: 'Blauw → Teal', value: 'blue' },
            { label: 'Cyaan → Teal', value: 'cyan' },
            { label: 'Teal → Blauw', value: 'teal' },
          ],
          admin: { width: '25%' },
        },
      ],
    },
    {
      name: 'content',
      label: 'Inhoud',
      type: 'blocks',
      blocks: contentBlocks,
    },
  ],
}

export const MediaCardBlock: Block = {
  slug: 'mediaCard',
  interfaceName: 'MediaCardBlock',
  labels: { singular: 'Kaart met foto', plural: 'Kaarten met foto' },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'image',
          label: 'Foto',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: { width: '50%' },
        },
        {
          name: 'badge',
          label: 'Label op de foto',
          type: 'text',
          admin: { width: '50%' },
        },
      ],
    },
    { name: 'content', label: 'Inhoud', type: 'richText', required: true },
    {
      type: 'row',
      fields: [
        {
          name: 'listStyle',
          label: 'Opsommingsstijl',
          type: 'select',
          defaultValue: 'check',
          options: [
            { label: 'Bolletjes', value: 'bullet' },
            { label: 'Vinkjes', value: 'check' },
          ],
        },
      ],
    },
  ],
}

export const CtaBlock: Block = {
  slug: 'cta',
  interfaceName: 'CtaBlock',
  labels: { singular: 'Call to action', plural: 'Calls to action' },
  fields: [
    { name: 'title', label: 'Titel', type: 'text', required: true },
    { name: 'text', label: 'Tekst', type: 'textarea' },
    {
      name: 'link',
      label: 'Knop',
      type: 'group',
      fields: [
        { type: 'row', fields: linkFields(false) },
        iconField({ name: 'icon', label: 'Knopicoon' }),
      ],
    },
  ],
}

export const SwimGroupsBlock: Block = {
  slug: 'swimGroups',
  interfaceName: 'SwimGroupsBlock',
  labels: { singular: 'Zwemgroepen overzicht', plural: 'Zwemgroepen overzichten' },
  admin: {
    // Purely a placeholder: content comes from the Zwemgroepen collection
    disableBlockName: true,
  },
  fields: [
    {
      name: 'note',
      type: 'ui',
      admin: {
        components: {
          Field: '@/components/admin/BlockNote#SwimGroupsNote',
        },
      },
    },
  ],
}

export const TrainingScheduleBlock: Block = {
  slug: 'trainingSchedule',
  interfaceName: 'TrainingScheduleBlock',
  labels: { singular: 'Trainingsschema', plural: 'Trainingsschema’s' },
  fields: [
    { name: 'title', label: 'Titel', type: 'text', defaultValue: 'Weekoverzicht', required: true },
    {
      name: 'note',
      type: 'ui',
      admin: {
        components: {
          Field: '@/components/admin/BlockNote#TrainingScheduleNote',
        },
      },
    },
  ],
}

export const InfoPanelBlock: Block = {
  slug: 'infoPanel',
  interfaceName: 'InfoPanelBlock',
  labels: { singular: 'Infopaneel', plural: 'Infopanelen' },
  fields: [
    { name: 'content', label: 'Inhoud', type: 'richText', required: true },
    {
      name: 'link',
      label: 'Knop',
      type: 'group',
      fields: [{ type: 'row', fields: linkFields(false) }],
    },
  ],
}

export const layoutBlocks = [
  CardBlock,
  MediaCardBlock,
  CtaBlock,
  SwimGroupsBlock,
  TrainingScheduleBlock,
  InfoPanelBlock,
]
