const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.config.webpackConfig.output = {
//     chunkFilename: 'js/[name].bundle.js',
//     publicPath: '/',
// };

mix.copy('resources/fonts', 'public/fonts');

mix.copy('resources/css/app.css', 'public/css/app.css').version();
mix.js(['resources/js/app.js', 'resources/js/helpers.js'], 'public/js').extract(['vue']).version();
    // .sass('resources/sass/app.sass', 'public/css').version();

