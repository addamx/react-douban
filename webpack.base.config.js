const path = require("path");

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
const extractLESS = new ExtractTextPlugin('stylesheets/[name].less');


module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve('./dist/'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve('./node_modules/'),
        include: path.resolve('./src/')
      },
      {	//不同于css文件, 即使less/sass有@import, 也不需要css-loader的importLoaders值
        test: /\.less$/,
        use: extractLESS.extract(['style-loader', 'css-loader', 'postcss-loader', 'less-loader'])
      },
      {
        test: /\.scss$/,
        use: extractCSS.extract(['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'])
      },
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
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    extractCSS,
    extractLESS
  ]
}
