const webpack = require('webpack');
const path = require('path');
// const babel = require("babel-core");

module.exports = {
  entry: {
    //YOUR hand typed JS "app" will be the output name
    app: './src/js/firstComp/index.js',
    //vendor = js libraries
    vendor: ['react']
  },
  //Converted JS location [name].js uses the entry name "app" in this case (see above).
  output: { filename: '[name].js',
            path: path.resolve(__dirname,
              'public/js/componenets')},

  module: {
    rules: [
      {
        //looks at any file that ends with .js
        test: /\.js$/,
        //exclude files from node_modules
        exclude: /node_modules/,
        //use the babel loader for conversion
        loader: 'babel-loader',
        //conversion presets (es2015)
        options: {
          presets: [
            [ 'es2015', { modules: false} ]
          ]
        }
      }
    ]
  }
}