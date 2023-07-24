const path = require('path');

const alias = {
  Src: path.resolve(__dirname, '../../src'),
  App: path.resolve(__dirname, '../../src/app'),
  Pages: path.resolve(__dirname, '../../src/pages'),
  Widgets: path.resolve(__dirname, '../../src/widgets'),
  Features: path.resolve(__dirname, '../../src/features'),
  Core: path.resolve(__dirname, '../../src/core'),
  Api: path.resolve(__dirname, '../../src/core/api'),
  Assets: path.resolve(__dirname, '../../src/core/assets'),
  Fonts: path.resolve(__dirname, '../../src/core/assets/fonts'),
  Images: path.resolve(__dirname, '../../src/core/assets/images'),
  Sprite: path.resolve(__dirname, '../../src/core/assets/sprite'),
  Config: path.resolve(__dirname, '../../src/core/config'),
  Lib: path.resolve(__dirname, '../../src/core/lib'),
  Ui: path.resolve(__dirname, '../../src/core/ui'),
};

module.exports = {
  alias,
};
