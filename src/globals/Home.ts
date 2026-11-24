import type { Field, GlobalConfig } from 'payload'

import { accentField, iconField, linkFields, sectionHeadingFields } from '../fields/options'
import { revalidateGlobal } from '../hooks/revalidate'
import { socialPlatforms } from './SiteSettings'

const photoArray = (name: string, label: string): Field => ({
  name,
  label,
  type: 'array',
  fields: [
    { name: 'image', label: 'Foto', type: 'upload', relationTo: 'media', required: true },
    {
      type: 'row',
      fields: [
        { name: 'title', label: 'Titel', type: 'text', required: true },
        { name: 'caption', label: 'Onderschrift', type: 'text' },
      ],
    },
  ],
})

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Homepage',
  admin: { group: 'Website' },
  access: { read: () => true },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Header',
          name: 'hero',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'title', label: 'Titel', type: 'text', required: true },
                { name: 'subtitle', label: 'Ondertitel', type: 'text' },
              ],
            },
            { name: 'description', label: 'Tekst', type: 'textarea' },
            {
              name: 'video',
              label: 'Achtergrondvideo',
              type: 'upload',
              relationTo: 'media',
              filterOptions: { mimeType: { contains: 'video' } },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'primaryButton',
                  label: 'Hoofdknop',
                  type: 'group',
                  fields: linkFields(false),
                },
                {
                  name: 'secondaryButton',
                  label: 'Tweede knop',
                  type: 'group',
                  fields: linkFields(false),
                },
              ],
            },
            {
              name: 'socialLinks',
              label: 'Social media',
              type: 'array',
              maxRows: 4,
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'platform', type: 'select', options: socialPlatforms, required: true },
                    { name: 'url', label: 'Link', type: 'text', required: true },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Over ons',
          name: 'about',
          fields: [
            ...sectionHeadingFields,
            {
              name: 'features',
              label: 'Kenmerken',
              type: 'array',
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'title', label: 'Titel', type: 'text', required: true },
                    iconField({ required: true }),
                    {
                      name: 'color',
                      label: 'Kleur',
                      type: 'select',
                      defaultValue: 'blue',
                      options: [
                        { label: 'Rood', value: 'red' },
                        { label: 'Groen', value: 'green' },
                        { label: 'Geel', value: 'yellow' },
                        { label: 'Paars', value: 'purple' },
                        { label: 'Blauw', value: 'blue' },
                      ],
                    },
                  ],
                },
                { name: 'description', label: 'Beschrijving', type: 'textarea' },
              ],
            },
            photoArray('photos', "Foto's"),
          ],
        },
        {
          label: 'Zwemgroepen',
          name: 'groups',
          fields: [
            ...sectionHeadingFields,
            {
              name: 'items',
              label: 'Groepen',
              type: 'array',
              fields: [
                {
                  name: 'image',
                  label: 'Foto',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'title', label: 'Titel', type: 'text', required: true },
                    accentField(),
                  ],
                },
                { name: 'description', label: 'Beschrijving', type: 'textarea' },
              ],
            },
          ],
        },
        {
          label: 'Zwembad',
          name: 'pool',
          fields: [...sectionHeadingFields, photoArray('photos', "Foto's")],
        },
        {
          label: 'Instagram',
          name: 'events',
          fields: [
            ...sectionHeadingFields,
            {
              type: 'row',
              fields: [
                {
                  name: 'instagramUsername',
                  label: 'Instagram-account',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'postCount',
                  label: 'Aantal berichten',
                  type: 'number',
                  defaultValue: 3,
                  min: 1,
                  max: 12,
                },
              ],
            },
            {
              name: 'followLabel',
              label: 'Knoptekst',
              type: 'text',
              defaultValue: 'Volg ons op Instagram',
            },
            {
              name: 'fallbackPosts',
              label: 'Reserveberichten',
              type: 'array',
              admin: {
                description: 'Worden getoond als Instagram tijdelijk niet bereikbaar is.',
              },
              fields: [
                {
                  name: 'image',
                  label: 'Foto',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                { name: 'caption', label: 'Tekst', type: 'textarea', required: true },
              ],
            },
          ],
        },
        {
          label: 'Contact',
          name: 'contact',
          fields: [
            ...sectionHeadingFields,
            {
              name: 'items',
              label: 'Contactgegevens',
              type: 'array',
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'title', label: 'Titel', type: 'text', required: true },
                    iconField({ required: true }),
                  ],
                },
                {
                  name: 'lines',
                  label: 'Regels',
                  type: 'textarea',
                  admin: { description: 'Elke regel wordt apart getoond.' },
                },
              ],
            },
            {
              name: 'successMessage',
              label: 'Bevestiging na versturen',
              type: 'text',
              defaultValue: 'Bedankt voor je bericht! We nemen snel contact met je op.',
            },
          ],
        },
      ],
    },
  ],
}
