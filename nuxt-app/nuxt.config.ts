import { resolve } from "path";

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

  alias: {
    "@": resolve(__dirname, "./"),
    "~": resolve(__dirname, "./"),
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "/assets/scss/config.scss" as *;
            @use "/assets/scss/mixin.scss" as *;
          `,
        },
      },
    },
  },

  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Zen+Kaku+Gothic+New:wght@500;700&display=swap",
        },
      ],
    },
  },
});
