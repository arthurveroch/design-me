import type { CollectionConfig } from 'payload'
import { revalidateTag } from 'next/cache'

export const Process: CollectionConfig = {
  slug: 'process',

  hooks: {
    afterChange: [
      () => {
        revalidateTag('process', 'max')
      },
    ],

    afterDelete: [
      () => {
        revalidateTag('process', 'max')
      },
    ],
  },

  fields: [
    {
      name: 'background',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'icon',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
  ],
}
