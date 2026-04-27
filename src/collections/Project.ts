import { revalidateTag } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const Project: CollectionConfig = {
  slug: 'project',

  hooks: {
    afterChange: [() => revalidateTag('projects', 'max')],
    afterDelete: [() => revalidateTag('projects', 'max')],
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'background',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      required: true,
    },
  ],
}
