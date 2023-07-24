const { cleanPublic } = require('./cleanPublic.js');
const { setProductionEnv } = require('./setProductionEnv.js');
const { deploy } = require('./deploy.js');
const { runServer, reloadServer } = require('./runServer.js');
const { prettifyTemplates } = require('./prettifyTemplates.js');
const { compileTemplates } = require('./compileTemplates.js');
const { compileModules } = require('./compileModules.js');
const { copyFonts } = require('./copyFonts.js');
const { optimizeImages } = require('./optimizeImages.js');
const { copyImages } = require('./copyImages.js');

const {
  transformFontsBuilder,
  transformFonts2Woff,
  transformFonts2Woff2,
  transformFonts,
} = require('./transformFonts.js');

const {
  mergeSvgBuilder,
  mergeSvgAsDefault,
  mergeSvgAsClean,
  mergeSvg,
} = require('./mergeSvg.js');

module.exports = {
  cleanPublic,
  setProductionEnv,
  deploy,
  runServer,
  reloadServer,
  prettifyTemplates,
  compileTemplates,
  compileModules,
  transformFontsBuilder,
  transformFonts2Woff,
  transformFonts2Woff2,
  transformFonts,
  copyFonts,
  optimizeImages,
  copyImages,
  mergeSvgBuilder,
  mergeSvgAsDefault,
  mergeSvgAsClean,
  mergeSvg,
};
