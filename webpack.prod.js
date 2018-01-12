const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: [
    './src/index.tsx',
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.UglifyJsPlugin({
      parallel: 8,
      sourceMap: false,
      output: {
        comments: false,
      }
    }),
  ],
});