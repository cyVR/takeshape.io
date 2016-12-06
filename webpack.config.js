const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: isProd ? false : 'source-map',
  entry: {
    'javascripts/main': './src/javascripts/main.js'
  },
  output: {
    path: path.join(__dirname, 'build/assets'),
    filename: isProd ? '[name].[chunkhash].js' : '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|vendor/,
        loader: 'babel'
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.json']
  },
  plugins: [
    new ManifestPlugin()
  ]
};
