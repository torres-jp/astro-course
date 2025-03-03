import { defineCollection, z } from 'astro:content'

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    image: z.string(),
    readtime: z.number(),
    buy: z.object({
      spain: z.string().url(),
      usa: z.string().url(),
    }),
  }),
})

export const collections = { books }
