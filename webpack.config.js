module.exports = {
  entry: './src/containers/app.jsx',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  }
}