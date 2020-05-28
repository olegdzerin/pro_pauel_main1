const http = require('http');
const fs = require('fs');
const chunk = require('./chunk.js');
let result = false;

const server = http.createServer(function (req,res) { 
  // req.write(chunk, function (data) { console.log(data) });
  //  res.end('end');
 // res.setDefaultEncoding();
  res
  .writeHead(200, {
     'Content-Encoding': 'Buffer',
    'Content-Type': 'text/plain'
  })
   
    let result = res.write(chunk.chunk());
  console.log(result);
  res.end('IT END');
  console.log(res.hasHeader);
});
server.on('request', function (req, res) { 
  console.log('request');
});

// http.get('http://localhost:8000/about', function (res) {
//        // res.statusCode = 200;
//   console.log(res);
//   console.log("rrrrrrrrrrrrrrrrrrrrrrr");
//      })

server.listen(8000);

