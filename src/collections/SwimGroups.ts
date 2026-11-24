import type { CollectionConfig } from 'payload'

import { accentField } from '../fields/options'
import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate'

export const SwimGroups: CollectionConfig = {
  slug: 'swim-groups',
  labels: { singular: 'Zwemgroep', plural: 'Zwemgroepen' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'updatedAt'],
    group: 'Zwemmen',
  },
  defaultSort: 'order',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateAfterChange],
    afterDelete: [revalidateAfterDelete],
  },
  fields: [
    { name: 'title', label: 'Naam', type: 'text', required: true },
    { name: 'image', label: 'Foto', type: 'upload', relationTo: 'media', required: true },
    { name: 'description', label: 'Beschrijving', type: 'textarea', required: true },
    {
      name: 'details',
      label: 'Extra informatie',
      type: 'textarea',
      admin: { description: 'Wordt onder een scheidingslijn getoond.' },
    },
    {
      type: 'row',
      fields: [
        accentField({ admin: { width: '50%' } }),
        {
          name: 'order',
          label: 'Volgorde',
          type: 'number',
          defaultValue: 0,
          admin: { width: '50%' },
        },
      ],
    },
  ],
}
