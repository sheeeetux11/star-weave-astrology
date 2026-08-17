// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogsCollection = defineCollection({
  loader: glob({ 
    pattern: '**/*.md', 
    base: './content/blogs', // Points directly to your root content/blogs folder
    generateId: ({ entry }) => {
      return entry.replace(/\.md$/, '');
    }
  }),
  
  schema: z.object({
    title: z.string(),
    date: z.string(), 
    readTime: z.string(), 
    author: z.string().default("SHEETU"),
    image: z.string().optional(),
    youtubeUrl: z.string().optional(),
    youtubeTitle: z.string().optional(),
    tags: z.array(z.string()).optional(),
    relatedPosts: z.array(
      z.object({
        title: z.string(),
        url: z.string(),
        description: z.string().optional(),
        thumbnail: z.string().optional(),
      })
    ).optional(),

    moreOnAstrology: z.array(
      z.object({
        title: z.string(),
        image: z.string(),
        url: z.string(),
      })
    ).optional(),
    
    manualPrev: z.string().optional(),
    manualNext: z.string().optional(),
  }),
});

export const collections = {
  blogs: blogsCollection,
};
