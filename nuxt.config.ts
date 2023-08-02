// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css',
  ],
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
  ],
  plugins: [
    { src: '~/plugins/scroll-behavior.client.ts', mode: 'client' }
  ],
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
  }
})
