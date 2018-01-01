const webpack = require('webpack');
const path = require("path");
const WebpackDevServer = require('webpack-dev-server');
const proxy = require('http-proxy-middleware');

const cfg = require('./webpack.dev.config');


new WebpackDevServer(webpack(cfg), {
  publicPath: cfg.output.publicPath,//-此路径下的打包文件可在浏览器中访问
  historyApiFallback: true, //-true:任意的 404 响应都可能需要被替代为 index.html
  hot: true,  //-启用 webpack 的模块热替换特性(需要HotModuleReplacementPlugin)
  inline: true,    //-是否启用内联模式, false则使用iframe模式; 推荐使用模块热替换的内联模式，因为它包含来自 websocket 的 HMR 触发器。轮询模式可以作为替代方案，但需要一个额外的入口点：'webpack/hot/poll?1000'。
  noInfo: false,  //-隐藏每次启动或保存之后显示的bundle信息
  stats: {    //-stats 选项能让你准确地控制显示哪些包的信息 https://doc.webpack-china.org/configuration/stats
    colors: true,   //- 等同于`webpack --colors`
  },
  proxy: {    //-代理 [http-proxy-middleware: https://github.com/chimurai/http-proxy-middleware#options]
    '/api/*': {
      target: 'https://api.douban.com/v2/',
      changeOrigin: true,      //解决跨域问题
      pathRewrite: { "^/api": "" }
    },
    '/': {
      bypass: (req, res, proxyOptions) => {
        return `${cfg.output.publicPath}/index.html`
      }
    }
  }
}).listen(3300, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3300');
});
