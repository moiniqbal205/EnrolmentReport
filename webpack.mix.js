const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
let img_src_path = 'resources/assets/images'
let js_src_path = 'resources/js'

mix.webpackConfig({
    resolve: {
        alias: {
            '@images': path.resolve(__dirname, img_src_path),
            '@js': path.resolve(__dirname, js_src_path)
        }
    }
})

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

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')]
    })
    .version()
