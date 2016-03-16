require('babel-polyfill')
require("babel-core/register")

var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function isDevelopment() {
    return process.env.NODE_ENV === 'development'
}

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './src/index'
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
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-decorators-legacy']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      }
    ]
  }
}

// for production case
if (!isDevelopment()) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            drop_console: true
        })
    );
}
