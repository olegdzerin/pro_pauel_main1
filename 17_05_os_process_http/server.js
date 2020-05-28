const http = require('http');

const server = http.createServer((req, res) => {
  res.end();
});
server.on('clientError', (err, socket) => {
    console.log('end');
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.on('close', function () { 
    console.log('close');
});
server.on('request', function (req, res) {
    console.log(`${req}`);
});
server.close();
server.listen(8000);