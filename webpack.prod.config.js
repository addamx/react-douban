'use strict'

const path = require("path")
const webpack = require('webpack')
const merge = require('webpack-merge')
//pugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
//config
const base = require('./webpack.base.config')
const baseConfig = base.webpackConfig
const pathConfig = base.commonPath
const pkg = require('./package.json')



module.exports = merge(baseConfig, {
  entry: {
    app: path.join(pathConfig.srcPath, "index.js"),
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    publicPath: '/douban-movie/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.join(pathConfig.rootPath, 'node_modules'),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader', 'less-loader']
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1		//告示@import来的css文件使用之前多少个loader;只对.css文件起效
              }
            }, 
            'postcss-loader'
          ]
        })
			}
    ]
  } ,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // 为了防止runtime也提取到新的vendor chunk而使hash变化, 应该把runtime也单独提取.
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'runtime'],
      filename: 'js/[name].[hash:5].js'
    }),
    new ExtractTextPlugin('css/[name].[hash:5].css')
  ]
})
