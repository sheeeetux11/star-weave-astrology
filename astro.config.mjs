import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://starweaveastrology.com',
  output: 'server',
  adapter: cloudflare(),
  server: {
    port: 3000,
    host: true,
  },
  integrations: [sitemap()],
});

