const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      title: 'To-do-List',
      template: './src/index.html',
      filename: 'index.html'
    }),
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
