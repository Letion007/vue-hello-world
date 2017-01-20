'use strict'
// const webpack = require('webpack');
// const CompressionPlugin = require("compression-webpack-plugin");
const {optimize: { UglifyJsPlugin }} = require('webpack');

const NODE_ENV =  process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/app.js',

  output: {
    filename: 'build/calc.js'
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
    extensions: ['', '.js', '.vue', '.css']
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.vue$/, loader: 'vue' }
    ]
  },
  watch: NODE_ENV == 'development',
  watchOptions: {
    aggregateTimeout:100,
  },

  devtool: NODE_ENV == 'development' ? "inline-source-map" : null,

  plugins: [
    // new DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    // }),

    // new CompressionPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.js$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // }),
  ],

  babel: {
    presets: ['es2015', 'stage-0'],
  }
};

if(NODE_ENV == 'production') {
  module.exports.plugins.push(
    new UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true,
      }
    })
  );
}
