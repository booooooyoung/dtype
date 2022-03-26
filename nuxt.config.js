export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dtype_editor',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    mode: `history`,
    extendRoutes (routes, resolve) {
      routes.length = 0
      routes.push({
        path: "/Account",
        component: resolve(__dirname, 'pages/Account.vue'),
        name: "Account"
      })
      routes.push({
        path: "/Exhibition",
        component: resolve(__dirname, 'pages/Exhibition.vue'),
        name: "Exhibition"
      })
      routes.push({
        path: "/Edit",
        component: resolve(__dirname, 'pages/Edit.vue'),
        name: "Edit"
      })
      routes.push({
        path: "/",
        component: resolve(__dirname, 'pages/logIn.vue'),
        name: "logIn"
      })
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  buildDir: "dist"
}
