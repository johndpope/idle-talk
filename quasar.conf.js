// Configuration for your app

module.exports = function (ctx) {
  return {
    htmlVariables: {
      googleSiteVerification: 'w471MZfU0ukSdtBp8u3K674Co5Kpe9aIiuj5jEp5X6g',
      googleSignInClientID: '273389259899-cjflhfg1s347huh7ulv3oug8b9bc0nuk.apps.googleusercontent.com',
    },
    boot: [
      'i18n',
      'axios',
      'router'
    ],
    css: [
      'app.styl',
      'colors.scss',
      'typography.scss',
      'spacing.scss',
    ],
    extras: [
      'ionicons-v4',
    ],
    framework: {
      all: true,
      components: [],
      directives: [],
      plugins: [],
      iconSet: 'ionicons-v4',
      lang: 'en-us',
    },
    supportIE: true,
    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      vueCompiler: true,
      gzip: true,
      analyze: false,
      extendWebpack(cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        })
      }
    },
    devServer: { https: true, port: 8080, open: false },
    animations: 'all',
    ssr: { pwa: false },
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {}, // only for NON InjectManifest
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          { 'src': 'statics/icons/icon-128x128.png', 'sizes': '128x128', 'type': 'image/png' },
          { 'src': 'statics/icons/icon-192x192.png', 'sizes': '192x192', 'type': 'image/png' },
          { 'src': 'statics/icons/icon-256x256.png', 'sizes': '256x256', 'type': 'image/png' },
          { 'src': 'statics/icons/icon-384x384.png', 'sizes': '384x384', 'type': 'image/png' },
          { 'src': 'statics/icons/icon-512x512.png', 'sizes': '512x512', 'type': 'image/png' }
        ]
      }
    },
    cordova: {},
    electron: {
      extendWebpack(cfg) { },
      packager: {},
      builder: {}
    }
  }
}
