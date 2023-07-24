const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const { globs } = require('../config/index.js');

function optimizeImages(cb) {
  return gulp.src(globs.images)
    .pipe(imagemin())
    .pipe(gulp.dest(globs.imagesBase))
    .on('end', cb)
    .on('error', cb);
};

module.exports = {
  optimizeImages,
};
