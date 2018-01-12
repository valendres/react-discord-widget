const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx',
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    loaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },

  devServer: {
    hot: true,
  },
});