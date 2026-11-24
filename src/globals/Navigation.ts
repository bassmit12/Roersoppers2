import type { GlobalConfig } from 'payload'

import { linkFields } from '../fields/options'
import { revalidateGlobal } from '../hooks/revalidate'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigatie',
  admin: { group: 'Website' },
  access: { read: () => true },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      name: 'items',
      label: 'Menu-items',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'label', label: 'Tekst', type: 'text', required: true },
            {
              name: 'url',
              label: 'Link',
              type: 'text',
              admin: { description: 'Leeg laten als het item alleen een uitklapmenu opent.' },
            },
          ],
        },
        {
          name: 'children',
          label: 'Uitklapmenu',
          type: 'array',
          fields: [{ type: 'row', fields: linkFields() }],
        },
      ],
    },
  ],
}
