var http = require('http');
var server = http.createServer().listen(4200);

server.on('request', function(req,res){ 
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log(req.headers, req.httpVersion);
    res.end('Hello');
})
server.on('connect', function (req, res) {
    console.log('connect');
});
//  http.createServer(
//     function (req, res) { 
//          res.writeHead(200, { 'Content-Type': 'text/plain' });
//          res.end('Fello');
//     }
// ).listen(4200);
// console.log(server.typeof());

// console.log(typeof(server));
