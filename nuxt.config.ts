// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  hooks: {
    "pages:extend"(pages) {
      pages.push({
        name: "home",
        path: "/home",
        file: "~/pages/index.vue",
      });
    },
  },
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
  css: ["tachyons/css/tachyons.min.css", "@/assets/banner.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@hebilicious/vue-query-nuxt",
    "@nuxt/fonts",
    "@vesp/nuxt-fontawesome",
    "@nuxt/test-utils/module",
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  fontawesome: {
    icons: {
      solid: ["bars", "envelope","save", "chevron-right", "chevron-left","file"],
      brands: ["instagram", "youtube", "twitter", "facebook", "linkedin"],
    },
  },
});
