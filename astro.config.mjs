import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';
   import sitemap from '@astrojs/sitemap';
   import compress from 'astro-compress';

export default defineConfig({
  site: 'https://biblestudyhub.com',
  output: 'hybrid',
  //adapter: cloudflare(),
  integrations: [tailwind(), sitemap(), compress()],

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    // sitemap(), // TODO: Fix `sitemap generation issue
    compress(),
  ],

  // Markdown and MDX configuration
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
    syntaxHighlight: 'shiki',
  },

  // Image optimization
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.pexels.com',
      },
    ],
  },

  // Build optimization
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },

  // Vite configuration for better performance
  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },

  // Server configuration
  server: {
    port: 3000,
    host: true,
  },

  // Prefetch configuration
  prefetch: {
    prefetchAll: true,
  },
});
export default defineConfig({
     output: 'static',
     integrations: [sitemap(), compress()],  // keep whatever integrations you already had
   });