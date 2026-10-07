import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://starweaveastrology.com',
  output: 'server', // Enables dynamic SSR handling for query parameters
  adapter: cloudflare({
    imageService: 'cloudflare',
  }),
  integrations: [sitemap()],
  server: {
    port: 3000,
    host: true,
  }
});
