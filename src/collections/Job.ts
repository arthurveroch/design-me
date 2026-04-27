import { revalidateTag } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const Job: CollectionConfig = {
  slug: 'job',

  hooks: {
    afterChange: [() => revalidateTag('jobs', 'max')],
    afterDelete: [() => revalidateTag('jobs', 'max')],
  },

  fields: [
    {
      name: 'background',
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
    {
      name: 'remote',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Oui',
          value: 'yes',
        },
        {
          label: 'Non',
          value: 'no',
        },
      ],
    },
  ],
}
