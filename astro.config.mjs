import { defineConfig } from 'astro/config';

// Static site. NL at /, EN at /en/. No integrations, no analytics, no external requests.
export default defineConfig({
  site: 'https://www.blockracers.online',
  // PREVIEW_BASE=/blockracers-website-preview/ for the preview build; live uses "/".
  base: process.env.PREVIEW_BASE || '/',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
