const gulp = require('gulp');

const {
  cleanPublic,
  setProductionEnv,
  compileTemplates,
  compileModules,
  prettifyTemplates,
  optimizeImages,
  copyImages,
  mergeSvg,
} = require('../tasks/index.js');


function build() {
  return gulp.series(
    setProductionEnv,
    cleanPublic,
    compileModules,
    compileTemplates,
    prettifyTemplates,
    optimizeImages,
    copyImages,
    mergeSvg(),
  );
}

module.exports = {
  build,
};
