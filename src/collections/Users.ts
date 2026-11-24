import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'Gebruiker', plural: 'Gebruikers' },
  admin: {
    useAsTitle: 'email',
    group: 'Beheer',
  },
  auth: true,
  fields: [{ name: 'name', label: 'Naam', type: 'text' }],
}
