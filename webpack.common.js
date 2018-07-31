// tutorial: https://webpack.js.org/guides/getting-started/
// concepts: https://webpack.js.org/concepts/
// node version to use this: 10.6.0
// node version to use for ocr-frontend old: 6.14.3 (subject to change)
// Set up local server on mac
// https://discussions.apple.com/docs/DOC-12034
/*
To switch node versions...
sudo npm cache clean -f
sudo npm install -g n
sudo n 4.4.2
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  resolve: {
		extensions: [".js", ".scss", ".css"],
		modules: [path.resolve(__dirname, 'src'), 'node_modules']
	},
  entry: {
    app: ['babel-polyfill', `./src/index.js`]
  },
  module: {
    // Use style-loader for dev mode
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          { loader: "sass-loader" }
        ]
      },
      { test: /\.html$/i, loader: 'html-loader'},
			{
        test: /\.js$/i,
        loader: 'babel-loader',
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel']
        },
        //include: path.join(__dirname, 'src'),
        exclude: nodeModulesDir
			},
      { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader'},
      { test: /\.xml$/, use: {loader: 'xml-loader'} },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // }),
    new CleanWebpackPlugin([`dist`]),
    new HtmlWebpackPlugin({
      title: 'Development',
      inject: true,
      template: `index.ejs`
    })
  ]
};


/*
https://webpack.js.org/guides/tree-shaking/

A "side effect" is defined as code that performs a special
 behavior when imported, other than exposing one or more exports.
  An example of this are polyfills, which affect the global
   scope and usually do not provide an export.

   https://stackoverflow.com/questions/49160752/what-does-webpack-4-expect-from-a-package-with-sideeffects-false
   more details about side effects property setting.
*/
