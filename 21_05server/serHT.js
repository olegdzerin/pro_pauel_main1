const http = require('http');
const fs = require('fs');
const chunk = require('../17_05_os_process_http/chunk.js');
let result = false;

const server = http.createServer(function (req, res) {
  // req.write(chunk, function (data) { console.log(data) });
  //  res.end('end');
  // res.setDefaultEncoding();
  // let writeStream = fs.createWriteStream('./writenString.txt');


  res
    .writeHead(200, {
      'Content-Encoding': 'Buffer',
      'Content-Type': 'text/html; charset=utf-8'
    });
  req.setEncoding('utf8');

  req.on('data', (chunk) => {
    console.log(`chunk ${chunk} `);
  });



  let result = res.write(chunk.chunk().messageHtml);

  res.end("this is end");

});
server.on('request', function (req, res) {
  console.log(`req.complete ${req.complete}`);
  req.on('data', (chunk) => {
    console.log(`chunk ${chunk} `);
  });
});

server.listen(8000);