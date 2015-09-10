/*
 * gulp serve
 */

var config = require('../config.json');
var $      = require('gulp-load-plugins')();
var bSync  = require('browser-sync').create();
var gulp   = require('gulp');

gulp.task('serve', function() {

  // watch sass files
  gulp.watch(config.src.sass + '**/*.scss', ['sass']);

  // watch js files
  gulp.watch(config.src.js + '**/*.js', ['js']);

  bSync.init({
    notify: false,
    open: "external",
    logPrefix: 'browser-sync',
    server: [config.site]
  });

  gulp.watch(config.site + '**/*.{html,css,js}').on('change', bSync.reload);

});
