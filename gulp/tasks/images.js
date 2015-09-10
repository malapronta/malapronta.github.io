/**
 * gulp images
 */

var config = require('../config.json');
var gulp  = require('gulp');
var quant = require('imagemin-pngquant');
var $     = require('gulp-load-plugins')();

gulp.task('images', function (cb) {
  return gulp.src([config.src.img + '**/*'])
    .pipe($.if($.if.isFile, $.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
      , use: [ quant({ quality: '70', speed: 4 }) ]
    }))
    .on('error', function (err) {
      console.log(err);
      this.end();
    })))
    .pipe($.size({ title: 'Images', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dest.img));
});
