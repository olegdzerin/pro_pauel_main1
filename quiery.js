var http = require('http');
var querystring = require('querystring');
var server = http.createServer(
    function (req, res) { 
        console.log(req);
        console.log(res);
    }
).listen(8124);
server.on('request', function(request,response) {
if (request.method == 'POST') {
var body = '';
// Фрагмент данных присоединяется к body
request.on('data', function (data) {
    body += data;
    console.log('Server:' + body);
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
console.log('server listening on 8124');