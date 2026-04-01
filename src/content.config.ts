import { defineCollection, z } from "astro:content";

const papers = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    whyItMatters: z.string(),
    authors: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    sourceUrl: z.string().url(),
    sourceHost: z.string(),
    doi: z.string().optional(),
    year: z.number().int().optional(),
    journal: z.string().optional(),
    capturedAt: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { papers };

