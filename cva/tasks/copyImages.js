const gulp = require('gulp');

const { globs } = require('../config/index.js');

function copyImages(cb) {
  return gulp.src(globs.images)
    .pipe(gulp.dest(globs.publicImages))
    .on('end', cb)
    .on('error', cb);
};

module.exports = {
  copyImages,
};
