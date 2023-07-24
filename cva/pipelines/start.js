const gulp = require('gulp');

const {
  cleanPublic,
  runServer,
  compileTemplates,
  compileModules,
  copyImages,
  mergeSvg,
} = require('../tasks/index.js');

const { main: mainWatcher } = require('../watchers/index.js');

function start() {
  return gulp.series(
    cleanPublic,
    compileModules,
    compileTemplates,
    copyImages,
    mergeSvg(),
    runServer,
    mainWatcher,
  );
}

module.exports = {
  start,
};
