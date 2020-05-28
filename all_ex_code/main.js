var http = require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
'msg' : 'Hello World!'
});
var options = {
hostname: 'localhost',
port: 8124,
method: 'POST',
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
'Content-Length': postData.length
}
};
var req = http.request(options, function(res) {
console.log('STATUS: ' + res.statusCode);
console.log('HEADERS: ' + JSON.stringify(res.headers));
res.setEncoding('utf8');
// Получение данных по фрагментам
res.on('data', function (chunk) {
console.log('BODY: ' + chunk);
});
// Завершение ответа
res.on('end', function() {
console.log('No more data in response.')
})
});
req.on('error', function(e) {
console.log('problem with request: ' + e.message);
});
// Запись данных в тело запроса
req.write(postData);
req.end();

var http = require('http');
var querystring = require('querystring');
var server = http.createServer().listen(8124);
server.on('request', function(request,response) {
if (request.method == 'POST') {
var body = '';
// Фрагмент данных присоединяется к body
request.on('data', function (data) {
body += data;
});
// Переданные данные
request.on('end', function () {
var post = querystring.parse(body);
console.log(post);
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('Hello World\n');
});
}
});
console.log('server listening on 8214');

// 2 exempl

// Создание и перенаправление потока для чтения
var file = fs.createReadStream(pathname);
file.on("open", function() {
file.pipe(res);
});

//
var gzip = zlib.createGzip();
var fs = require('fs');
var inp = fs.createReadStream('input.txt');
var out = fs.createWriteStream('input.txt.gz');
inp.pipe(gzip).pipe(out);

//
var fs = require('fs');
fs.writeFile('./some.txt','Writing to a file',function(err) {
if (err) return console.error(err);
fs.readFile('./some.txt','utf-8', function(data,err) {
if (err) return console.error(err);
console.log(data);
});
});