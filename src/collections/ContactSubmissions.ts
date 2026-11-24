import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  labels: { singular: 'Contactbericht', plural: 'Contactberichten' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'createdAt'],
    group: 'Formulieren',
  },
  defaultSort: '-createdAt',
  access: {
    // Anyone may submit the contact form; only logged-in users can read it
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: 'name', label: 'Naam', type: 'text', required: true, maxLength: 200 },
    { name: 'email', label: 'E-mailadres', type: 'email', required: true },
    { name: 'message', label: 'Bericht', type: 'textarea', required: true, maxLength: 5000 },
  ],
}
