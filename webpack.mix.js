const { mix } = require('laravel-mix')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': __dirname + '/resources/assets/js'
    }
  },
})

mix
  .js('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .sass('resources/assets/sass/auth.scss', 'public/css')
  .disableNotifications()
  .browserSync({
    proxy: 'web:8000',
    port: 8001,
    open: false,
    notify: {
      styles: {
        top: 'auto',
        bottom: '0',
      }
    }
  })

if (mix.config.inProduction) {
  mix.version()
}

