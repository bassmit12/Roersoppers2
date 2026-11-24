import type { CollectionConfig } from 'payload'

import { layoutBlocks } from '../blocks/layout'
import { iconField } from '../fields/options'
import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Pagina', plural: "Pagina's" },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    group: 'Inhoud',
    preview: (doc) => (doc?.slug ? `/${doc.slug}` : null),
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateAfterChange],
    afterDelete: [revalidateAfterDelete],
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'title', label: 'Paginanaam', type: 'text', required: true },
        {
          name: 'slug',
          label: 'URL-pad',
          type: 'text',
          required: true,
          unique: true,
          index: true,
          admin: { description: 'Zonder begin-slash, bijv. informatie/over-ons' },
          validate: (value: string | null | undefined) =>
            !value || /^[a-z0-9-]+(\/[a-z0-9-]+)*$/.test(value)
              ? true
              : 'Gebruik alleen kleine letters, cijfers, - en /',
        },
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Kop',
          name: 'hero',
          fields: [
            iconField({ defaultValue: 'heart' }),
            {
              type: 'row',
              fields: [
                {
                  name: 'titleLead',
                  label: 'Titel (eerste regel)',
                  type: 'text',
                  admin: { description: 'Optioneel, wordt donker getoond boven de titel.' },
                },
                { name: 'title', label: 'Titel', type: 'text', required: true },
              ],
            },
            {
              name: 'subtitle',
              label: 'Ondertitel',
              type: 'textarea',
              admin: {
                description:
                  'Een lege regel begint een nieuwe alinea. Een link maak je zo: [tekst](mailto:info@roersoppers.nl).',
              },
            },
          ],
        },
        {
          label: 'Inhoud',
          fields: [
            {
              name: 'layout',
              label: 'Blokken',
              type: 'blocks',
              blocks: layoutBlocks,
            },
          ],
        },
        {
          label: 'SEO',
          name: 'meta',
          fields: [
            { name: 'title', label: 'Paginatitel', type: 'text' },
            { name: 'description', label: 'Beschrijving', type: 'textarea' },
          ],
        },
      ],
    },
  ],
}
