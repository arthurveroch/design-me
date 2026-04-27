import { revalidateTag } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const FaqJob: CollectionConfig = {
  slug: 'faq-job',

  hooks: {
    afterChange: [() => revalidateTag('faq-job', 'max')],

    afterDelete: [() => revalidateTag('faq-job', 'max')],
  },

  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },

    {
      name: 'response',
      type: 'text',
      required: true,
    },
  ],
}
