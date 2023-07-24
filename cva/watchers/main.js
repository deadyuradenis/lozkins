const gulp = require('gulp');

const { watchingGlobs } = require('../config/index.js');

const {
  reloadServer,
  compileTemplates,
  compileModules,
  copyImages,
  mergeSvg,
} = require('../tasks/index.js');

function main() {
  gulp.watch(
    [...watchingGlobs.pug],
    compileTemplates,
  ).on('change', reloadServer);

  gulp.watch(
    [
      ...watchingGlobs.js,
      ...watchingGlobs.css,
    ],
    compileModules,
  ).on('change', reloadServer);

  gulp.watch(
    [
      ...watchingGlobs.images,
    ],
    gulp.series(
      copyImages,
    )
  ).on('change', reloadServer);

  gulp.watch(
    [
      ...watchingGlobs.sprite,
    ],
    mergeSvg(),
  ).on('change', reloadServer);
};

module.exports = {
  main,
};
