import type { Block, Field } from 'payload'

import { iconField, linkFields } from '../fields/options'

// Blocks that live inside a Card. Every block gets a width so editors can
// place callouts side by side.
const widthField: Field = {
  name: 'width',
  label: 'Breedte',
  type: 'select',
  defaultValue: 'full',
  required: true,
  options: [
    { label: 'Volledig', value: 'full' },
    { label: 'Half', value: 'half' },
    { label: 'Een derde', value: 'third' },
  ],
  admin: { width: '33%' },
}

const listStyleField: Field = {
  name: 'listStyle',
  label: 'Opsommingsstijl',
  type: 'select',
  defaultValue: 'bullet',
  options: [
    { label: 'Bolletjes', value: 'bullet' },
    { label: 'Vinkjes', value: 'check' },
  ],
  admin: { width: '33%' },
}

export const RichTextBlock: Block = {
  slug: 'richText',
  interfaceName: 'RichTextBlock',
  labels: { singular: 'Tekst', plural: 'Tekst' },
  fields: [
    { name: 'content', label: 'Inhoud', type: 'richText', required: true },
    { type: 'row', fields: [widthField, listStyleField] },
  ],
}

export const CalloutBlock: Block = {
  slug: 'callout',
  interfaceName: 'CalloutBlock',
  labels: { singular: 'Uitgelicht blok', plural: 'Uitgelichte blokken' },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'title', label: 'Titel', type: 'text', admin: { width: '50%' } },
        iconField({ admin: { width: '50%' } }),
      ],
    },
    { name: 'content', label: 'Inhoud', type: 'richText' },
    {
      type: 'row',
      fields: [
        {
          name: 'variant',
          label: 'Stijl',
          type: 'select',
          defaultValue: 'blue',
          required: true,
          options: [
            { label: 'Blauw met rand', value: 'blue' },
            { label: 'Cyaan met rand', value: 'cyan' },
            { label: 'Zacht blauw', value: 'soft' },
            { label: 'Oranje waarschuwing', value: 'amber' },
            { label: 'Wit met oranje rand', value: 'white' },
            { label: 'Grijs', value: 'slate' },
            { label: 'Volle kleur (witte tekst)', value: 'solid' },
            { label: 'Zacht blauw met icoontegel', value: 'tile' },
            { label: 'Kleine lettertjes', value: 'note' },
          ],
          admin: { width: '33%' },
        },
        widthField,
        listStyleField,
      ],
    },
    {
      name: 'align',
      label: 'Uitlijning',
      type: 'radio',
      defaultValue: 'left',
      options: [
        { label: 'Links', value: 'left' },
        { label: 'Gecentreerd', value: 'center' },
      ],
    },
  ],
}

export const TableBlock: Block = {
  slug: 'table',
  interfaceName: 'TableBlock',
  labels: { singular: 'Tabel', plural: 'Tabellen' },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'title', label: 'Titel', type: 'text', admin: { width: '50%' } },
        iconField({ admin: { width: '50%' } }),
      ],
    },
    { name: 'titleNote', label: 'Toelichting achter titel', type: 'text' },
    {
      name: 'style',
      label: 'Opmaak',
      type: 'select',
      defaultValue: 'bordered',
      required: true,
      options: [
        { label: 'Met randen', value: 'bordered' },
        { label: 'Alleen lijnen tussen rijen', value: 'lines' },
      ],
    },
    {
      name: 'variant',
      label: 'Kleur',
      type: 'select',
      defaultValue: 'blue',
      required: true,
      options: [
        { label: 'Blauw', value: 'blue' },
        { label: 'Cyaan', value: 'cyan' },
        { label: 'Teal', value: 'teal' },
      ],
    },
    {
      name: 'columns',
      label: 'Kolommen',
      type: 'array',
      minRows: 1,
      fields: [{ name: 'label', label: 'Kolomnaam', type: 'text', required: true }],
    },
    {
      name: 'rows',
      label: 'Rijen',
      type: 'array',
      fields: [
        {
          name: 'cells',
          label: 'Cellen',
          type: 'array',
          admin: {
            description:
              'E-mailadressen en links worden automatisch klikbaar. Gebruik een nieuwe regel voor meerdere waarden.',
          },
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'value', label: 'Waarde', type: 'textarea', admin: { width: '70%' } },
                {
                  name: 'colSpan',
                  label: 'Kolommen breed',
                  type: 'number',
                  min: 1,
                  defaultValue: 1,
                  admin: { width: '15%' },
                },
                {
                  name: 'emphasis',
                  label: 'Vet',
                  type: 'checkbox',
                  admin: { width: '15%', style: { alignSelf: 'center' } },
                },
              ],
            },
          ],
        },
      ],
    },
    { type: 'row', fields: [widthField] },
  ],
}

export const DownloadBlock: Block = {
  slug: 'download',
  interfaceName: 'DownloadBlock',
  labels: { singular: 'Download', plural: 'Downloads' },
  fields: [
    { name: 'title', label: 'Titel', type: 'text', required: true },
    { name: 'file', label: 'Bestand', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'buttonLabel',
      label: 'Knoptekst',
      type: 'text',
      defaultValue: 'Download formulier',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'style',
          label: 'Weergave',
          type: 'select',
          defaultValue: 'box',
          required: true,
          options: [
            { label: 'Blok met titel', value: 'box' },
            { label: 'Alleen knop', value: 'button' },
          ],
          admin: { width: '33%' },
        },
        widthField,
      ],
    },
  ],
}

export const NameGridBlock: Block = {
  slug: 'nameGrid',
  interfaceName: 'NameGridBlock',
  labels: { singular: 'Namenlijst', plural: 'Namenlijsten' },
  fields: [
    { name: 'title', label: 'Titel', type: 'text' },
    {
      name: 'names',
      label: 'Namen',
      type: 'array',
      fields: [{ name: 'name', label: 'Naam', type: 'text', required: true }],
    },
    { type: 'row', fields: [widthField] },
  ],
}

export const ButtonBlock: Block = {
  slug: 'button',
  interfaceName: 'ButtonBlock',
  labels: { singular: 'Knop', plural: 'Knoppen' },
  fields: [
    { type: 'row', fields: linkFields() },
    {
      type: 'row',
      fields: [
        iconField({ admin: { width: '33%' } }),
        {
          name: 'align',
          label: 'Uitlijning',
          type: 'select',
          defaultValue: 'left',
          required: true,
          options: [
            { label: 'Links', value: 'left' },
            { label: 'Gecentreerd', value: 'center' },
          ],
          admin: { width: '33%' },
        },
        widthField,
      ],
    },
  ],
}

export const contentBlocks = [
  RichTextBlock,
  CalloutBlock,
  TableBlock,
  DownloadBlock,
  NameGridBlock,
  ButtonBlock,
]
