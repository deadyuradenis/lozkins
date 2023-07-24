const dirs = {
  src: 'src',
  dest: 'public',
  appLayer: 'app',
  pagesLayer: 'pages',
  coreLayer: 'core',
  assets: 'assets',
  assetsFonts: 'fonts',
  assetsImages: 'images',
  assetsSprite: 'sprite',
  transform: '.transform',
};

const globs = {
  module: `${dirs.src}/${dirs.appLayer}/index.js`,
  page: `${dirs.src}/${dirs.pagesLayer}/**/index.pug`,
  transformFonts: `${dirs.transform}/${dirs.assetsFonts}/**/*.ttf`,
  fontsBase: `${dirs.src}/${dirs.coreLayer}/${dirs.assets}/${dirs.assetsFonts}`,
  fonts: `${dirs.src}/${dirs.coreLayer}/${dirs.assets}/${dirs.assetsFonts}/**/*`,
  imagesBase: `${dirs.src}/${dirs.coreLayer}/${dirs.assets}/${dirs.assetsImages}`,
  images: `${dirs.src}/${dirs.coreLayer}/${dirs.assets}/${dirs.assetsImages}/**/*`,
  sprite: `${dirs.src}/${dirs.coreLayer}/${dirs.assets}/${dirs.assetsSprite}/**/*.svg`,
  public: `${dirs.dest}/`,
  publicPages: `${dirs.dest}/*.html`,
  publicFonts: `${dirs.dest}/${dirs.assets}/${dirs.assetsFonts}`,
  publicImages: `${dirs.dest}/${dirs.assets}/${dirs.assetsImages}`,
  publicSprites: `${dirs.dest}/${dirs.assets}/${dirs.assetsSprite}`,
};

const watchingGlobs = {
  js: [
    `${dirs.src}/**/*.js`,
    `!${dirs.src}/**/*.stories.js`,
  ],
  css: [`${dirs.src}/**/*.s[ca]ss`],
  pug: [`${dirs.src}/**/*.pug`],
  fonts: [`${dirs.src}/${dirs.coreLayer}/${dirs.assets}/${dirs.assetsFonts}/**/*.ttf`],
  images: [`${dirs.src}/${dirs.coreLayer}/${dirs.assets}/${dirs.assetsImages}/**/*`],
  sprite: [`${dirs.src}/${dirs.coreLayer}/${dirs.assets}/${dirs.assetsSprite}/**/*.svg`],
};

module.exports = {
  dirs,
  globs,
  watchingGlobs,
};
