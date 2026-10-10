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
    readTime: z.string().optional(), 
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
        headerIcon: z.string().optional(),
        isExpanded: z.boolean().optional(),
        is_expanded: z.boolean().default(false).optional(), // Kept for backwards compatibility
        cards: z.array(
          z.object({
            icon: z.string().optional(),
            title: z.string(),
            url: z.string().optional(),
            sub_links: z.array(
              z.object({
                date: z.string().optional(),
                text: z.string(),
                url: z.string(),
              })
            ).optional(),
          })
        ).optional(), // Made optional so moon calendar sections don't require empty cards
        
        // New Moon & Full Moon Calendar Fields
        newMoonIcon: z.string().optional(),
        fullMoonIcon: z.string().optional(),
        pairs: z.array(
          z.object({
            newMoon: z.object({
              title: z.string(),
              url: z.string(),
              date: z.string(),
            }).optional(), // Make newMoon optional
            fullMoon: z.object({
              title: z.string(),
              url: z.string(),
              date: z.string(),
            }).optional(), // Make fullMoon optional
          })
        ).optional(),
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
