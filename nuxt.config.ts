// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/pro-solid-svg-icons',
      '@fortawesome/pro-regular-svg-icons',
      '@fortawesome/pro-light-svg-icons',
      '@fortawesome/free-brands-svg-icons'
    ]
  },
  css: ["tachyons/css/tachyons.min.css", "@/assets/banner.css"],
  modules: [
    '@nuxtjs/tailwindcss',
    '@hebilicious/vue-query-nuxt',
    '@nuxt/fonts',
    '@vesp/nuxt-fontawesome',
    '@nuxt/test-utils/module'
  ],
  fontawesome: {
    icons: {
      solid: ['dollar-sign', 'cog', 'circle', 'check', 'calendar'],
      regular: ['user']
    }
  }
})