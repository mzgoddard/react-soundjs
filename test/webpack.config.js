module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
