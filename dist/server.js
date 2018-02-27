'user strict';

const
      fs = require('fs'),
      url = require('url'),
      path = require('path'),
      http = require('http');

// 
var root = path.resolve(process.argv[2] || '');

console.log('Static root dir:' + root);

//创建服务器
var server = http.createServer(function (request, response) {
    // 获得URL 的path，类似 '/css/bootstrap.css':
    var pathName = url.parse(request.url).pathname;
	if (pathName.slice(-1) === '/') {
        pathName += 'index.html'
    }
    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    var filePath = path.join(root, pathName);

    // 获取文件状态:
    fs.stat(filePath, function (err, stats) {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHead(200);
            // 将文件流导向response:
            fs.createReadStream(filePath).pipe(response);
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

var port = '3303',
    hostName = '127.0.0.1'

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}`);
});