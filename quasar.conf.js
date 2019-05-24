// Configuration for your app

module.exports = function (ctx) {
  return {
    boot: [
      'i18n',
      'axios'
    ],
    css: [
      'app.styl',
      'typography.scss'
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
