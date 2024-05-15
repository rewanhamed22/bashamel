// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@vee-validate/nuxt",
    "@nuxtjs/i18n",
    "shadcn-nuxt",
  ],
  i18n: {
    locales: [
      {
        code: "ar",
        iso: "ar",
        name: "Arabic",
        file: "ar.yml",
        dir: "rtl",
      },
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.yml",
        dir: "ltr",
      },
    ],
    langDir: "locales/",
    strategy: "prefix_except_default",
    defaultLocale: "en",
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
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
