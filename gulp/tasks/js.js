/*
 * gulp js
 */

var config = require('../config.json');
var $      = require('gulp-load-plugins')();
var gulp   = require('gulp');

/**
 * task for javascript
 */

gulp.task('lint', function() {
  return gulp.src([config.src.js + '**/*.js'])
  .pipe($.jshint.extract('auto|always|never'))
  .pipe($.jshint())
  .pipe($.jshint.reporter('default', { verbose: true }));
})

.task('js', function() {
  gulp.src(config.dev.js + 'main.js')
    .pipe($.plumber())
    .pipe($.include()).on('error', console.log)
    .pipe(gulp.dest(config.dest.js))
    .pipe($.uglify())
    .pipe($.rename({ suffix  : '.min' }))
    .pipe($.size({ title: 'Scripts', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dest.js))
    .pipe($.plumber.stop());
});
