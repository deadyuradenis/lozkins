const gulp = require('gulp');

const { globs } = require('../config/index.js');

function copyFonts(cb) {
  return gulp.src(globs.fonts)
    .pipe(gulp.dest(globs.publicFonts))
    .on('end', cb)
    .on('error', cb);
};

module.exports = {
  copyFonts,
};
