// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css',
  ],
  runtimeConfig: {
    public: {
      FB_API_KEY: process.env.FB_API_KEY,
      FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
      FB_PROJECT_ID: process.env.FB_PROJECT_ID,
      FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
      FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
      FB_APP_ID: process.env.FB_APP_ID,
      FB_MEASUREMENT_ID: process.env.FB_MEASUREMENT_ID,
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/global.scss";',
        },
      },
    },
  },
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/image',
  ],
  plugins: [
    { src: '~/plugins/scroll-behavior.client.ts', mode: 'client' }
  ],
  image: {
    dir: 'assets/animate'
  },
  googleFonts: {
    families: {
      Exo: true,
    },
    download: false,
    base64: false,
    fontsPath: '@/assets/fonts',
    preload: true
  },
  typescript: {
    strict: true
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
})
