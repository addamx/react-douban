const webpack = require('webpack');
const path = require("path");
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const history = require('connect-history-api-fallback');
const proxy = require('http-proxy-middleware');

const app = new(require('express'))();
const cfg = require('./webpack.dev.config');

//仅仅server.js改成const address = "0.0.0.0";会发生跨域问题
const address = 'localhost';
const port = '3300';
const compiler = webpack(cfg);

app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: cfg.output.publicPath,
    inline: true,
    hot: true,
    quiet: false,
    stats: {
        colors: true
    }
}));
app.use(webpackHotMiddleware(compiler));


const api = proxy('/api', {
    target: 'https://api.douban.com/v2/',
    changeOrigin: true,
    pathRewrite: {
        "^/api": ""
    }
});
app.use('/api/*', api);

app.get('/test', function (req, res) {
    const data = {
        title: '2',
        content: 'success'
    }
    res.send(data)
});

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

const server = app.listen(port, address, function (error) {
    if (error) {
        console.error(error);
    } else {
        console.info("==> Listening on port %s. Open up http://%s: %s/ in your browser.", port, address, port);
    }
});