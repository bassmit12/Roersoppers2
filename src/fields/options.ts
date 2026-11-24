import type { Field } from 'payload'

// Keys map to lucide icons in src/components/Icon.tsx
export const iconOptions = [
  { label: 'Alert', value: 'alert-circle' },
  { label: 'Briefcase', value: 'briefcase' },
  { label: 'Calendar', value: 'calendar' },
  { label: 'Vinkje', value: 'check-circle' },
  { label: 'Klok', value: 'clock' },
  { label: 'Betaalkaart', value: 'credit-card' },
  { label: 'Downloaden', value: 'download' },
  { label: 'Euro', value: 'euro' },
  { label: 'Document', value: 'file-text' },
  { label: 'Hart', value: 'heart' },
  { label: 'Mail', value: 'mail' },
  { label: 'Locatie', value: 'map-pin' },
  { label: 'Telefoon', value: 'phone' },
  { label: 'Schild', value: 'shield' },
  { label: 'Ster', value: 'star' },
  { label: 'Doel', value: 'target' },
  { label: 'Trofee', value: 'trophy' },
  { label: 'Personen', value: 'users' },
  { label: 'Golven', value: 'waves' },
  { label: 'Kruis', value: 'x-circle' },
  { label: 'Bliksem', value: 'zap' },
]

export const iconField = (overrides: Partial<Field> = {}): Field =>
  ({
    name: 'icon',
    label: 'Icoon',
    type: 'select',
    options: iconOptions,
    ...overrides,
  }) as Field

// Accent colours, rendered as tailwind gradients in src/lib/styles.ts
export const accentOptions = [
  { label: 'Blauw → Cyaan', value: 'blue-cyan' },
  { label: 'Cyaan → Teal', value: 'cyan-teal' },
  { label: 'Geel → Oranje', value: 'yellow-orange' },
  { label: 'Paars → Roze', value: 'purple-pink' },
  { label: 'Blauw → Indigo', value: 'blue-indigo' },
  { label: 'Roze → Rood', value: 'rose-red' },
  { label: 'Groen → Teal', value: 'green-teal' },
]

export const accentField = (overrides: Partial<Field> = {}): Field =>
  ({
    name: 'accent',
    label: 'Accentkleur',
    type: 'select',
    options: accentOptions,
    defaultValue: 'blue-cyan',
    required: true,
    ...overrides,
  }) as Field

export const linkFields = (required = true): Field[] => [
  { name: 'label', label: 'Tekst', type: 'text', required },
  {
    name: 'url',
    label: 'Link',
    type: 'text',
    required,
    admin: { description: 'Bijv. /trainingsschema, /#contact, https://… of mailto:…' },
  },
]

export const sectionHeadingFields: Field[] = [
  {
    type: 'row',
    fields: [
      { name: 'headingLead', label: 'Titel (eerste regel)', type: 'text' },
      { name: 'heading', label: 'Titel (gekleurde regel)', type: 'text', required: true },
    ],
  },
  {
    name: 'intro',
    label: 'Introductie',
    type: 'textarea',
    admin: {
      description:
        'Zet tekst tussen **sterretjes** om deze blauw en vet te tonen. Een link maak je zo: [tekst](/pagina).',
    },
  },
]
