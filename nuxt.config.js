const OPTIONS = {
  name: 'TITLE',
  description: 'description',
  keywords: 'keywords',
  defaultLocale: 'ru',
  background_color: '#151515',
  theme_color: '#000000',
  url: 'http://site.example'
};

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    host: '0.0.0.0',
    port: '3000'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: OPTIONS.name,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      { hid: 'description', name: 'description', content: OPTIONS.description },
      { hid: 'keywords', name: 'keywords', content: OPTIONS.keywords }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/robots'
  ],

  bootstrapVue: {
    // https://bootstrap-vue.js.org/docs#using-custom-bootstrap-scss
    bootstrapVueCSS: false,
    bootstrapCSS: false,
    componentPlugins: [
      'ButtonPlugin',
      'FormPlugin',
      'FormCheckboxPlugin',
      'FormInputPlugin',
      'ModalPlugin'
    ]
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      fileName: 'icon.png'
    },
    meta: {
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black-translucent',
      name: OPTIONS.name,
      description: OPTIONS.description,
      theme_color: OPTIONS.theme_color,
      lang: OPTIONS.defaultLocale
    },
    manifest: {
      name: OPTIONS.name,
      short_name: OPTIONS.name,
      description: OPTIONS.description,
      start_url: '/index-sw.html?standalone=true',
      display: 'fullscreen', // fullscreen | standalone
      background_color: OPTIONS.background_color,
      theme_color: OPTIONS.theme_color,
      lang: OPTIONS.defaultLocale
    },
    workbox: {
      // fix https://github.com/nuxt-community/pwa-module/issues/176
      clientsClaim: false,
      preCaching: ['/index-sw.html']
    }
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: OPTIONS.url,
    gzip: true
  },

  robots: {
    UserAgent: '*',
    // Disallow: '/',
    // Allow: '/',
    Host: OPTIONS.url
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},

    loaders: {
      cssModules: {
        modules: {
          localIdentName:
            process.env.NODE_ENV === 'production'
              ? '[hash:base64:5]'
              : '[local]__[hash:base64:5]'
        }
      }
    }
  }
};
