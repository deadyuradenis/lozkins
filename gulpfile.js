const { deploy, transformFonts } = require('./cva/tasks/index.js');
const { start, build } = require('./cva/pipelines/index.js');

exports.default = start();
exports.start = start();
exports.build = build();

exports.deploy = deploy;
exports.transformFonts = transformFonts();
