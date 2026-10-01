import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://starweaveastrology.com', // Replace with your actual production domain when ready
  output: 'server',

  adapter: netlify({
    // Disables local Edge Functions emulation in Codespaces dev mode
    devFeatures: {
      edgeFunctions: false
    }
  }),

  server: {
    port: 3000,
    host: true
  },

  integrations: [sitemap()]
});
