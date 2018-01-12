const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  entry: [
    './src/index.tsx',
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJsPlugin({
      parallel: 8,
      sourceMap: false,
    }),
  ],
});