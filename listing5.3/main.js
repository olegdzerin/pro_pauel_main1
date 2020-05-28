var http = require('http'),
    mime = require('mime'),
    fs = require('fs'),
    queryString = require('querystring');
  //  base = '/home/examples/public_html';
base = 'public_html';
http.createServer(function (req, res) {
    pathname = base + req.url;
//     var type = mime.lookup(pathname);
// console.log(type);
    //res.setHeader('Content-Type', type);
    var base = 'public_html';
var data = '/somedomain.com/?value3=valueone&value1=valueoneb&value2=valuetwo';
console.log(queryString.parse(data));
console.log(pathname);
fs.stat(pathname, function(err,stats) {
if (err) {
console.log(err);
res.writeHead(404);
res.write('Resource missing 404\n');
res.end();
} else {
res.setHeader('Content-Type', 'text/html');
// Создание и перенаправление потока для чтения
var file = fs.createReadStream(pathname);
file.on("open", function() {
res.statusCode = 200;
 file.pipe(res);
    
});
file.on("error", function(err) {
console.log(err);
res.writeHead(403);
    res.write('file missing or permission problem');
    res.end();
});
}
});
}).listen(8124);
console.log('Server running at 8124');