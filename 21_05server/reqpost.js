const querystring = require('querystring');
const http = require('http');
const chunk = require('../17_05_os_process_http/chunk.js');
const postData = querystring.stringify({
    'msg': 'Hello World!'
  });
  
  const options = {
    hostname: 'localhost',
    port: 8000,
    path: '',
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   'Content-Length': Buffer.byteLength(postData)
    // }
  };
  
  const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
      console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
      console.log(`METHOD: ${JSON.stringify(res.method)}`);
      console.log(`URL: ${JSON.stringify(res.url)}`);
    res.setEncoding('utf8');
    // res.on('data', (chunk) => {
    //   console.log(`BODY: ${chunk}`);
    // });a
      
    res.on('end', () => {
      console.log('No more data in response.');
    });
  });
  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });
req.write(chunk.chunk());
// req.on('data',);
req.end('write');
  
  
  
  // Write data to request body
 // req.write(postData);
// req.on('response', function (res) {
//     res.on('data', (chunk) => {
//         console.log(`BODYYYYYYYYYYYYYYYYY: ${chunk}`);
//       });
//  });
// req.on('response', function (res) {
//     let read = res.read();
//     console.log(read);
//  });
// req.on('response', function (res) {
//     res.on('readable', () => {
//         let read = res.read();
//              console.log(read);
//       });
//  });
// req.on('response', function (res) {
//     res.resume();
//  });
//   req.end();