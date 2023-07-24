const gulp = require('gulp')
const prettyHtml = require('gulp-pretty-html');

const { globs } = require('../config/index.js');

function prettifyTemplates(cb) {
  return gulp.src(globs.publicPages)
    .pipe(prettyHtml({
      indent_size: 2,
    }))
    .pipe(gulp.dest(globs.public))
    .on('end', cb)
    .on('error', cb);
};

module.exports = {
  prettifyTemplates,
};
