var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var NODE_ENV  = process.env.NODE_ENV;

function isDevelopment() {
    return NODE_ENV === 'development';
}

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './index'
  ],
  watch: isDevelopment(),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new ExtractTextPlugin('app.css', {
      allChunks: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      }
    ]
  }
}

// for production case
if (isDevelopment()) {
    module.exports.plugins.push(
        new webpack.UglifyJsPlugin({
            drop_console: true
        })
    );
}
