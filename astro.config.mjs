export default defineConfig({
  site: 'https://starweaveastrology.com',
  output: 'server',
  adapter: cloudflare({
  }),
  session: false,
  server: {
    port: 3000,
    host: true,
  },
  integrations: [sitemap()],
});
