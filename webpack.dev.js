const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const frontendChoice = 'reactjs';
const webpack = require('webpack');
const path = require('path');

// docs: https://github.com/webpack/docs/wiki/webpack-dev-server
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watchOptions: {
    poll: true
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: '[name].[hash].bundle.js'
  },
  devServer: {
    contentBase: "./",
    historyApiFallback: {
      index: '/'
    },
    stats: { colors: true },
    port: 4000,
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
