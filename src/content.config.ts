import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. Blogs Collection
const blogsCollection = defineCollection({
  loader: glob({ 
    pattern: '**/*.md', 
    base: './src/content/blogs',
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

// 2. Master Lists Collection
const masterListsCollection = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/master-lists',
    generateId: ({ entry }) => {
      return entry.replace(/\.md$/, '');
    }
  }),

  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    headerPills: z.array(
      z.object({
        text: z.string(),
        target: z.string(),
      })
    ).optional(),
    introDescription: z.string().optional(),
    sections: z.array(
      z.object({
        heading: z.string(),
        description: z.string().optional(),
        is_expanded: z.boolean().default(false).optional(),
        cards: z.array(
          z.object({
            icon: z.string().optional(),
            title: z.string(),
            url: z.string().optional(),
            sub_links: z.array(
              z.object({
                text: z.string(),
                url: z.string(),
              })
            ).optional(),
          })
        ),
      })
    ).optional(),
    blogLinkCards: z.object({
      heading: z.string().optional(),
      links: z.array(
        z.object({
          title: z.string(),
          url: z.string(),
          description: z.string().optional(),
          thumbnail: z.string().optional(),
        })
      ),
    }).optional(),
  }),
});

// 3. Export Collections
export const collections = {
  blogs: blogsCollection,
  master_lists: masterListsCollection,
};
