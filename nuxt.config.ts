// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/storybook',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils',
    '@nuxt/icon',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  srcDir: 'src/',
  compatibilityDate: '2025-05-15',
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
