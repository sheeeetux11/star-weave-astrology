import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://starweaveastrology.com',
  // output: 'static', // Static is the default, so you can leave it out or specify it explicitly
  integrations: [sitemap()],
  server: {
    port: 3000,
    host: true,
  }
});