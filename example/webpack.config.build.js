var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;

module.exports = {
  context: __dirname,
  entry: '.',
  output: {
    path: __dirname + '/dist',
    filename: '[hash].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|vendor/,
        loader: 'babel-loader',
      },
      {
        test: /\.wav$/,
        loader: 'file-loader',
      },
      {
        test: /\/soundjs/,
        loader: 'exports-loader?createjs!script-loader',
      },
    ],
  },
  resolve: {
    alias: {
      'react-soundjs': '../lib',
    },
    modulesDirectories: ['node_modules', 'vendor'],
    extensions: ['', '.js', '.jsx', '.min.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new UglifyJsPlugin(),
  ],
};
