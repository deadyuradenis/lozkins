const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const { globs } = require('../config/index.js');

function compileModules(cb) {
  return gulp
    .src(globs.module)
    .pipe(webpackStream(require('../webpack.config.js'), webpack)) // eslint-disable-line global-require
    .pipe(gulp.dest(globs.public))
    .on('end', cb)
    .on('error', cb);
};

module.exports = {
  compileModules,
};
