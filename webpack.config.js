const path = require('path')

module.exports = {
  context: __dirname,
  entry: './src/components/Layout.js',
  devtool: 'eval',
  output: {
   path: path.join(__dirname, '/public'),
   filename: 'bundle.js'
 },
 devServer: {
   publicPath: '/public/'
 },
  resolve: {
     extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        include: path.resolve(__dirname, 'src', 'components'),
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        include: path.resolve(__dirname, 'src', 'styles'),
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
}
