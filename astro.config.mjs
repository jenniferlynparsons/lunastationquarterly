import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lunastationquarterly.com',
  // Astro 7 changed the default to 'jsx', which strips whitespace between inline
  // elements (e.g. adjacent inline-block buttons). Restore v5 behavior.
  compressHTML: true,
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
