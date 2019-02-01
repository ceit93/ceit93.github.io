import axios from 'axios'
const pkg = require('./package')

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'مجله فارغ‌التحصیلی دانشجویان ورودی ۱۳۹۳',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'msapplication-TileColor', content: '#ffffff'},
      {name: 'theme-color', content: '#ffffff'},
      {hid: 'description', name: 'description', content: 'مجله فارغ‌التحصیلی دانشجویان ورودی سال ۱۳۹۳ دانشکده مهندسی کامپیوتر و فناوری اطلاعات دانشگاه صنعتی امیرکبیر (پلی‌تکنیک تهران)'},
      {property: 'og:locale', content: 'fa_IR'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: 'favicon.ico'},
      {rel: 'icon', type: 'image/png', href: 'favicon-32x32.png', sizes:'32x32'},
      {rel: 'icon', type: 'image/png', href: 'favicon-16x16.png', sizes:'16x16'},
      {rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#5bbad5'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'},
      {rel: 'apple-touch-startup-image', href: 'apple-splash-640x1136.png', media:'(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'},
      {rel: 'apple-touch-startup-image', href: 'apple-splash-750x1294.png', media:'(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'},
      {rel: 'apple-touch-startup-image', href: 'apple-splash-1242x2148.png', media:'(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'},
      {rel: 'apple-touch-startup-image', href: 'apple-splash-1125x2436.png', media:'(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'},
      {rel: 'apple-touch-startup-image', href: 'apple-splash-1536x2048.png', media:'(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)'},
      {rel: 'apple-touch-startup-image', href: 'apple-splash-1668x2224.png', media:'(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)'},
      {rel: 'apple-touch-startup-image', href: 'apple-splash-2048x2732.png', media:'(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)'},

    ]
  },
  css: [
    '@/assets/css/main.scss',
    '@/assets/css/iransharp.css',
    '@/assets/style/app.styl'
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#30fff2'},

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/helper/index.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', {id: 'UA-120518365-1'}]
  ],

  axios: {
    port: '3000',
    prefix: '/data/',
    https: true,
    proxyHeaders: false,
    proxy: true, // Can be also an object with default options
    debug: false
  },

  generate: {
    routes: function () {
      return axios.get('http://localhost:3000/data/people/index.json')
        .then((res) => {
          return res.data.map((user) => {
            return '/' + user.username
          })
        })
    }
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
