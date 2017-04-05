var gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');

gulp.task('webpack', function() {
  return gulp.src('./src/js/app.js')
    .pipe(webpackStream({
      watch: true,
      entry: {
        vendor: ['jquery', 'velocity-animate'],
        app: './src/js/app.js'
      },
      output: {
        filename: '[name].bundle.js'
      },
      plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.ProvidePlugin({
          $: 'jquery',
          velocity: 'velocity-animate',
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
          }
        }),
      ]
    }))
    .pipe(gulp.dest('./public/js/'));
});