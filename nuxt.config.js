
require("dotenv").config(process.cwd())

const AXIOS_BASEURL = process.env.AXIOS_BASEURL || ""

module.exports = {
  head: {
    title: 'Nomad Play List',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '모카의 노마드 플레이 리스트' },
      { name: "msapplication-TileColor", content: "#7457eb" },
      { name: "theme-color", content: "#ffffff" },
    ],
    link: [
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: 'stylesheet', type: 'text/css', href: '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' },
    ]
  },
  css: [
    "~/assets/fonts/campton/campton.css",
    "~/assets/fonts/godo/godo.css",
    "~/assets/scss/home.scss",
  ],
  loading: { color: '#3B8070' },

  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: AXIOS_BASEURL,
  },
  
  router: {
    base: '/preview/'
  },
  build: {
    extend (config, { isDev, isClient }) {
      if (!isDev) {
        config.output.publicPath = "./_nuxt/";
      }

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    minify: {
      collapseWhitespace: true,
      removeRedundantAttributes: false,
    }
  },
}
