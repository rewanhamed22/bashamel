// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt",
      meta: [{ name: "description", content: "Everything about nuxt 3" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
    baseURL: "/bashamel/",
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },
  ssr: false,
});
