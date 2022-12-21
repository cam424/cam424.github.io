// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "@/assets/_colors.scss" as *;'
        }
      }
    }
  },
  css: [
    '~/assets/css/fonts.css'
  ],
  modules: [
    '@nuxtjs/svg'
  ],
  plugins: [
    {
      src: '~/plugins/dat.js',
      mode: 'client'
    },
    '~/plugins/fontawesome.js'
  ],
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-brands-svg-icons'
    ]
  }
})
