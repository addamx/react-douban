'use strict'

const path = require('path');

//webpack
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//path config
const rootPath = path.resolve(__dirname, '.');     // 项目根目录
const srcPath = path.join(rootPath, 'src');             // 开发源码目录
const env = process.env.NODE_ENV.trim();            // 当前环境

const commonPath = {
  rootPath: rootPath,
  srcPath: srcPath,
  dist: path.join(rootPath, 'dist'),              // build 后输出目录
  indexHTML: path.join(srcPath, 'index.html'),        // 入口模板页面
  staticDir: path.join(rootPath, 'static')        // 不需编译的静态资源
};

module.exports = {
  commonPath,
  webpackConfig: {
    output: {
      path: commonPath.dist,
      filename: '[name].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx', '.css', '.scss', 'less'],
      alias: {
        //'vue$': 'vue/dist/vue.esm.js',  //使用vue的完整版而非运行版
        '@': path.resolve('src')
      }
    },
    module: {
      rules: [
        // {
        //   test: /\.vue$/,
        //   loader: 'vue-loader'
        // },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.(mp3|webm|ogg)/,
          use: {
            loader: 'file-loader',
          }
        },
        {
          test: /\.(png|jpg|gif|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 5000,
                name: 'assets/[name]-[hash:5].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|svg|ttf|eot)($|\?)/i,
          loader: 'url-loader?limit=5000&name=[name]-[hash:6].[ext]'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'your app title',
        template: commonPath.indexHTML
      }),
      new webpack.DefinePlugin({
        __DEV__: env === 'development',
        __PROD__: env === 'production'
      })
    ]
  }
}