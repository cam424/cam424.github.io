// inspo: https://i.pinimg.com/originals/7f/34/e1/7f34e13c3f497b47e6ee9289b4f37d8c.jpg
// inspo 2: https://plaza.one/
// figma resources: https://www.figma.com/file/Ot7rfpaK2KicT1FYjdLvTu/Untitled?node-id=9%3A194&t=z0RO7pqBH9boscwb-0
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
    '@/assets/css/fonts.css'
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
  },
  app: {
    // baseURL: '/docs',
    buildAssetsDir: '/_nuxt/',
  },
})
