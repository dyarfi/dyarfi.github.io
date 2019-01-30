const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management @ https://laravel.com/docs/5.4/mix
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Multiple
//mix.js('resources/assets/js/app.js', 'public/js')
//.sass('resources/assets/sass/app.scss', 'public/css');

mix.setPublicPath('./');

mix.sass('static/sass/app.scss', 'static/css/minified').options({
  processCssUrls: false
});

// Multiple
//mix.less('resources/assets/less/app.less', 'public/css')
   //.less('resources/assets/less/admin.less', 'public/css');
//mix.less('resources/assets/less/app.less', 'public/css');

mix.browserSync({
  host: 'localhost',
  port: 3000,
  proxy: 'localhost/dyarfi.github.io/',
  files: ["static/css/*.css","static/css/minified/*.css","static/sass/*.sass", "static/js/*.js","index.html"],
  // Open the site in Chrome & Firefox
  browser: ["google chrome", "firefox"],
  // Don't show any notifications in the browser.
  notify: false
});

