let mix = require('laravel-mix');

mix.js('src/js/app.js', 'js').vue();
mix.sass('src/scss/app.scss', 'css');

mix.setPublicPath('dist');
mix.version();