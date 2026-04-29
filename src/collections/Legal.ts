import type { CollectionConfig } from 'payload'

export const Legal: CollectionConfig = {
  slug: 'legal',

  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
