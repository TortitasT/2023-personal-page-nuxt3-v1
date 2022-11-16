export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Tortitas",
      meta: [
        { name: "description", content: "Tortitas personal page." },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
