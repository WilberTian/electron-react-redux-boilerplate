var path = require('path');
var webpack = require('webpack');

var port = process.env.PORT || 8080;

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'redux-logger',
      'redux-thunk',      
      `webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr`
    ]
  }
  ,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: `http://localhost:${port}/dist`
  },
  plugins: [
    /**
     * This is where the magic happens! You need this to enable Hot Module Replacement!
     */
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    /**
     * NoErrorsPlugin prevents your webpack CLI from exiting with an error code if
     * there are errors during compiling - essentially, assets that include errors
     * will not be emitted. If you want your webpack to 'fail', you need to check out
     * the bail option.
     */
    new webpack.NoErrorsPlugin(),
    /**
     * DefinePlugin allows us to define free variables, in any webpack build, you can
     * use it to create separate builds with debug logging or adding global constants!
     * Here, we use it to specify a development build.
     */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css?$/,
      loaders: ['style', 'css'],
      include: __dirname
    }]
  }
};
