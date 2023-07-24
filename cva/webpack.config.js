const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = MiniCssExtractPlugin.loader;

const { dirs, alias } = require('./config/index.js');
const { getWebpackAssetsFilename: getAssetsFilename } = require('./lib/index.js');

const config = {
  mode: isProduction ? 'production' : 'development',
  entry: `./${dirs.src}/index.js`,
  stats: 'errors-only',
  resolve: {
    modules: ['node_modules'],
    alias,
  },
  output: {
    path: path.resolve(__dirname, dirs.dest),
    filename: 'js/index.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/index.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(svg)$/i,
        include: path.resolve(__dirname, `../${dirs.src}/${dirs.coreLayer}/${dirs.assets}/${dirs.assetsSprite}`),
        type: 'asset/resource',
        generator: {
          filename: getAssetsFilename,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        include: path.resolve(__dirname, `../${dirs.src}/${dirs.coreLayer}/${dirs.assets}/${dirs.assetsFonts}`),
        type: 'asset/resource',
        generator: {
          filename: getAssetsFilename,
        },
      },
    ],
  },
};

module.exports = config;
