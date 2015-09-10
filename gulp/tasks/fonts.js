/**
 * task for copy fonts
 */

var config = require('../config.json');
var $      = require('gulp-load-plugins')();
var gulp   = require('gulp');

gulp.task('fonts', function () {
  return gulp.src([config.src.fonts + '**/*.{eot,svg,ttf,woff,woff2}'])
    .pipe($.size({ title: 'Images', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dest.fonts));
});
