import { revalidateTag } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const FaqHome: CollectionConfig = {
  slug: 'faq-home',

  hooks: {
    afterChange: [() => revalidateTag('faqHome', 'max')],
    afterDelete: [() => revalidateTag('faqHome', 'max')],
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
