import { visualizer } from 'rollup-plugin-visualizer';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/storybook',
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],
  devtools: { enabled: true },
  srcDir: 'src/',
  compatibilityDate: '2025-05-15',
  vite: {
    plugins: [
      visualizer({
        filename: './.nuxt/stats.html',
        open: true,
      }),
    ],
  },
  typescript: {
    strict: true,
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: true,
        arrowParens: true,
      },
    },
  },
  storybook: {
    host: 'http://localhost',
    port: 6006,
  },
  tailwindcss: {
    config: {
      darkMode: 'media',
    },
    cssPath: '~/assets/styles/tailwind.css',
    viewer: true,
    exposeConfig: true,
    editorSupport: true,
  },
});
