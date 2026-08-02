import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import compress from 'astro-compress';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://biblestudyhub.com',
  output: 'hybrid',
  adapter: cloudflare(),

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
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
