const gulp = require('gulp');
const rename = require('gulp-rename');
const pug = require('gulp-pug');

const { dirs, globs } = require('../config/index.js');

function compileTemplates(cb) {
  return gulp.src(globs.page)
    .pipe(rename((path) => {
      const newBasename = path.dirname;

      path.basename = newBasename; // eslint-disable-line no-param-reassign
      path.dirname = ''; // eslint-disable-line no-param-reassign
    }))
    .pipe(pug({
      basedir: dirs.src,
    }))
    .pipe(gulp.dest(globs.public))
    .on('end', cb)
    .on('error', cb);
};

module.exports = {
  compileTemplates,
};
