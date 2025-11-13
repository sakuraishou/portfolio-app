// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // ★★★ 以下の runtimeConfig ブロックを追記 ★★★
  runtimeConfig: {
    // サーバーサイドのみで利用可能
    // (NUXT_STRAPI_API_URL が 'http://strapi:1337' に入る)
    strapiApiUrl: process.env.NUXT_STRAPI_API_URL,

    // クライアントサイドでも利用可能 (public)
    public: {
      // (NUXT_PUBLIC_STRAPI_API_URL が 'http://localhost:1337' に入る)
      strapiApiUrl: process.env.NUXT_PUBLIC_STRAPI_API_URL,
    },
  },

  // ★ この css ブロックが必須です
  css: [
    "~/assets/scss/main.scss",
    // ↑ この一行が、Nuxtに「サイト全体で main.scss を読み込め」と指示しています
  ],
});
