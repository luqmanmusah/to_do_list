const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const options = {};
module.exports = {
 mode: 'development',
 entry: {
   index: './src/index.js',
 },
 devtool: 'inline-source-map',
 devServer: {
    contentBase: './dist',
  },
 plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new WebpackManifestPlugin(options),
  ],

  output: {
   filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
