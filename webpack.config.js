const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/js/firstComp/index.js',
    //vendor = js libraries
    vendor: ['react']
  },
  output: { filename: '[name].js',
            path: path.resolve(__dirname,
              'public/js/componenets')},

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [ 'es2015', { modules: false} ]
          ]
        }
      }
    ]
  },

  plugins: [
    //
          new webpack.optimize.CommonsChunkPlugin({
              name: 'vendor',
              minChunks: function (module) {
                return module.context &&
                module.context.indexOf('node_modles') !== -1;
              }
          }),
  ]
}