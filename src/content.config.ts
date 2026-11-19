import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { locales } from '@/i18n/locales';

const statement = z.object({
  title: z.string(),
  body: z.string(),
});

const projectCopy = z.object({
  title: z.string(),
  category: z.string(),
  summary: z.string(),
  role: z.string(),
  duration: z.string(),
  challenge: statement,
  solution: statement,
  features: z.array(statement),
  outcome: z.object({
    lead: z.string(),
    accent: z.string(),
    body: z.string(),
  }),
});

const link = z.object({
  label: z.string(),
  href: z.url(),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      order: z.number().int(),
      year: z.number().int(),
      preview: z.enum(['browser', 'phone', 'chart', 'code']),
      client: z.string(),
      stack: z.array(z.string()).min(1),
      domain: z.string(),
      liveUrl: z.url().optional(),
      repoUrl: z.url().optional(),
      links: z.array(link).default([]),
      media: z
        .object({
          cover: image().optional(),
          desktop: image().optional(),
          mobile: image().optional(),
          detail: image().optional(),
        })
        .default({}),
      copy: z.record(z.enum(locales), projectCopy),
    }),
});

export const collections = { projects };
