'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'react',
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:3300' })//-自动调用浏览器打开url
  ]
})
