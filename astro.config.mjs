import { defineConfig } from 'astro/config';

// Static site. NL at /, EN at /en/. No integrations, no analytics, no external requests.
export default defineConfig({
  site: 'https://www.blockracers.online',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
