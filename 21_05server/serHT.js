const http = require('http');
const fs = require('fs');
const chunk = require('../17_05_os_process_http/chunk.js');
let result = false;

const server = http.createServer(function (req,res) { 
  // req.write(chunk, function (data) { console.log(data) });
  //  res.end('end');
 // res.setDefaultEncoding();
    let writeStream = fs.createWriteStream('./writenString.txt');
   
    let chunkWrite = 'end';
    res
        .writeHead(200, {
            'Content-Encoding': 'Buffer',
            'Content-Type': 'text/html; charset=utf-8'
        });
    req.setEncoding('utf8');
    req.read();
    // req.on('data', (chunk) => { 
        
    //     console.log(chunk);
    //     writeStream.write(chunk);
    // });
    req.pipe(writeStream);
   
   
    let result = res.write(chunk.chunk().messageHtml);
  console.log(result);
  res.end(chunkWrite);
 
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