// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      titleTemplate: "CRSUBEB | CROSS RIVER STATE UNIVERSAL BASIC EDUCATION BOARD",
      title: "CROSS RIVER STATE UNIVERSAL BASIC EDUCATION BOARD",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "As the driving force behind educational development in Cross River State, SUBEB is dedicated to fostering a transformative learning environment for every child." },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },

  //css
  css: [
    '~/assets/css/main.css',
    'primevue/resources/themes/saga-blue/theme.css'
  ],

  modules: [
    'nuxt-primevue',
    '@pinia/nuxt',
    'nuxt-icon',
    'nuxt3-leaflet'
  ],

  plugins: [
    "~/plugins/vue-toastify.ts",
    "~/plugins/api/index.ts"
  ],

  pinia: {
    storesDirs: ['./stores/**'],
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },    

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  primevue: {
    components: {
      include: '*',
    }
  }
})
