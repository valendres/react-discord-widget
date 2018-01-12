const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
   // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: 'Discord Widget',
      chunksSortMode: 'dependency',
      template: path.resolve(__dirname, './src/index.ejs'),
    }),
  ],

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.tsx?$/,
        loaders: [
          'awesome-typescript-loader',
        ],
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
};