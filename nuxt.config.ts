export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      title: "Tortitas",
      meta: [
        { name: "description", content: "Tortitas personal page." },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  modules: ["@nuxt/content"],
});
