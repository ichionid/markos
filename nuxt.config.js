export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'markos',
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
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  target: 'static',
  router: {
    base: '/markos/'
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'druxt-site', 'druxt-blocks', 'druxt-entity'
  ],
  druxt: {
    baseUrl: 'https://dev-markos-nextjs.pantheonsite.io'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
