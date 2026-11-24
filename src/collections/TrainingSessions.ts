import type { CollectionConfig } from 'payload'

import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate'

export const days = [
  { label: 'Maandag', value: 'monday' },
  { label: 'Dinsdag', value: 'tuesday' },
  { label: 'Woensdag', value: 'wednesday' },
  { label: 'Donderdag', value: 'thursday' },
  { label: 'Vrijdag', value: 'friday' },
  { label: 'Zaterdag', value: 'saturday' },
  { label: 'Zondag', value: 'sunday' },
] as const

const validateTime = (value: string | null | undefined) =>
  !value || /^([01]\d|2[0-3]):[0-5]\d$/.test(value)
    ? true
    : 'Gebruik het formaat UU:MM, bijv. 18:30'

export const TrainingSessions: CollectionConfig = {
  slug: 'training-sessions',
  labels: { singular: 'Training', plural: 'Trainingen' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'groups', 'updatedAt'],
    group: 'Zwemmen',
  },
  defaultSort: 'startTime',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateAfterChange],
    afterDelete: [revalidateAfterDelete],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: { hidden: true },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            const day = days.find((d) => d.value === siblingData.day)?.label ?? ''
            return `${day} ${siblingData.startTime} - ${siblingData.endTime}`
          },
        ],
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'day',
          label: 'Dag',
          type: 'select',
          options: [...days],
          required: true,
          admin: { width: '34%' },
        },
        {
          name: 'startTime',
          label: 'Begintijd',
          type: 'text',
          required: true,
          validate: validateTime,
          admin: { width: '33%', placeholder: '18:30' },
        },
        {
          name: 'endTime',
          label: 'Eindtijd',
          type: 'text',
          required: true,
          validate: validateTime,
          admin: { width: '33%', placeholder: '20:00' },
        },
      ],
    },
    {
      name: 'groups',
      label: 'Zwemgroepen',
      type: 'relationship',
      relationTo: 'swim-groups',
      hasMany: true,
      required: true,
    },
  ],
}
