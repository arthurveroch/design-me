import { revalidateTag } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const Expertise: CollectionConfig = {
  slug: 'expertise',

  hooks: {
    afterChange: [
      () => {
        revalidateTag('expertise', 'max')
      },
    ],

    afterDelete: [
      () => {
        revalidateTag('expertise', 'max')
      },
    ],
  },

  fields: [
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
