const gulp = require('gulp');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');

const { globs } = require('../config/const.js');

const transformFontsMap = {
  'woff': ttf2woff,
  'woff2': ttf2woff2,
};

const transformFontsBuilder = (format) => {
  return (cb) => {
    const transformUtil = transformFontsMap[format];

    return gulp.src(globs.transformFonts)
      .pipe(transformUtil())
      .pipe(gulp.dest(globs.fontsBase))
      .on('end', cb)
      .on('error', cb);
  }
};

function transformFonts2Woff(cb) {
  return transformFontsBuilder('woff')(cb);
};

function transformFonts2Woff2(cb) {
  return transformFontsBuilder('woff2')(cb);
};

function transformFonts() {
  return gulp.parallel(
    transformFonts2Woff,
    transformFonts2Woff2,
  );
};

module.exports = {
  transformFontsBuilder,
  transformFonts2Woff,
  transformFonts2Woff2,
  transformFonts,
};
