var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var packageInfo = require('./package.json');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  entry: {
    app: './client/app/app',
    lib: [
      'lodash',
      'jquery',
      'angular',
      'angular-ui-router',
      'angular-ui-bootstrap',
      'angular-component',
      'bootstrap-loader'
    ]
  },
  resolve: {
    alias: {}
  },
  noParse: [],
  plugins: [
    new ExtractTextPlugin('app.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      version: packageInfo.version,
      template: 'client/index.html'
    }),
    new CommonsChunkPlugin({
      name: 'lib'
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
      { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass' ]},
      { test: /\.css$/, loaders: ['style', 'css', 'postcss' ]},
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
       'file?hash=sha512&digest=hex&name=[hash].[ext]',
       'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]}, 
      { test: /\.(ttf|eot|svg)/, loader: 'file' }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
};
