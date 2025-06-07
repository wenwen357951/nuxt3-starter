// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  modules: ["@nuxtjs/storybook", "@pinia/nuxt", "@nuxtjs/tailwindcss"],
  typescript: {
    strict: true,
  },
  tailwindcss: {
    config: {
      darkMode: "media",
    },
    cssPath: "~/assets/styles/tailwind.css",
    viewer: true,
    exposeConfig: true,
    editorSupport: true,
  },
  devtools: { enabled: true },
  compatibilityDate: "2025-05-15",
});
