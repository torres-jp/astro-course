import { defineCollection, z } from 'astro:content'

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
  }),
})
