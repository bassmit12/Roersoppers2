import type { GlobalConfig } from 'payload'

import { linkFields } from '../fields/options'
import { revalidateGlobal } from '../hooks/revalidate'

export const socialPlatforms = [
  { label: 'Facebook', value: 'facebook' },
  { label: 'Instagram', value: 'instagram' },
  { label: 'X / Twitter', value: 'twitter' },
  { label: 'YouTube', value: 'youtube' },
]

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site-instellingen',
  admin: { group: 'Website' },
  access: { read: () => true },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Algemeen',
          fields: [
            { name: 'siteName', label: 'Naam vereniging', type: 'text', required: true },
            {
              name: 'meta',
              label: 'Zoekmachines',
              type: 'group',
              fields: [
                { name: 'title', label: 'Titel', type: 'text', required: true },
                { name: 'description', label: 'Beschrijving', type: 'textarea' },
                { name: 'keywords', label: 'Trefwoorden', type: 'text' },
              ],
            },
          ],
        },
        {
          label: 'Footer',
          name: 'footer',
          fields: [
            {
              name: 'quickLinks',
              label: 'Snelle links',
              type: 'array',
              fields: [{ type: 'row', fields: linkFields() }],
            },
            {
              name: 'contact',
              label: 'Contactgegevens',
              type: 'group',
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'location', label: 'Plaats', type: 'text' },
                    { name: 'phone', label: 'Telefoon', type: 'text' },
                    { name: 'email', label: 'E-mail', type: 'email' },
                  ],
                },
              ],
            },
            {
              name: 'socialLinks',
              label: 'Social media',
              type: 'array',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'platform',
                      type: 'select',
                      options: socialPlatforms,
                      required: true,
                    },
                    { name: 'url', label: 'Link', type: 'text', required: true },
                  ],
                },
              ],
            },
            {
              name: 'legalLinks',
              label: 'Juridische links',
              type: 'array',
              fields: [{ type: 'row', fields: linkFields() }],
            },
            {
              name: 'credit',
              label: 'Gemaakt door',
              type: 'group',
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'name', label: 'Naam', type: 'text' },
                    { name: 'email', label: 'E-mail', type: 'email' },
                    { name: 'phone', label: 'Telefoon', type: 'text' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
