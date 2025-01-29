// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui', '@nuxt/image'],
  css: [
    '@quasar/extras/material-icons/material-icons.css',
  ],
  vite: {
    ssr: {
      noExternal: ['quasar'],
    },
  },
  runtimeConfig: {
    apiSecret: process.env.NUXT_API_SECRET,
    apiUrl: process.env.NUXT_API_URL,
    public: {
      /**
       * TODO get setting backend data from database against company code and SET Database Connection
       * ! important ! do not change this unless you know what you are doing
       */
      environment: process.env.NUXT_ENV,
      domain: process.env.DOMAIN!,
      CompanyName: process.env.NUXT_SITE_NAME!,
      baseURL: process.env.NUXT_SITE_URL!,
      baseURLAlternate: process.env.NUXT_SITE_URL_ALTERNATE!,
      cacheMinAge: 10 * 60 * 1000, // 10 mins
      cacheMaxAge: 30 * 60 * 1000, // 1 hr
      viewLimit: 0,
      currency: "BDT", // Primary Currency (For Post Method)
      currencyBefore: "৳",
      currencyAfter: "",
      imgRatio: "1",
      //small img
      imgGridSmallWidth: "150px",
      imgGridSmallHeight: "200px",
      //medium img
      imgGridMediumWidth: "183px",
      imgGridMediumHeight: "244px",
      //large img
      imgGridLargeWidth: "420px",
      imgGridLargeHeight: "560px",

      scrollAreaMobile: "275px",
      scrollAreaMobileDouble: "540px",
      tagFiltering: "null" // fg_tag_id for filtering , if not needed then null
    },
  },
})