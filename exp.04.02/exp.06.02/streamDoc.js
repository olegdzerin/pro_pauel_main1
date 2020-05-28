
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // `req` is an http.IncomingMessage, which is a Readable Stream.
  // `res` is an http.ServerResponse, which is a Writable Stream.
  let readStream = fs.createReadStream('./output.txt');
  let body = 'body';
  // Get the data as utf8 strings.
  // If an encoding is not set, Buffer objects will be received.
  req.setEncoding('utf8');
  // var name = require('url').parse(req.url, true).query.name;
       // console.log(name);
  // Readable streams emit 'data' events once a listener is added.
  req.on('data', (chunk) => {
    body += chunk;
  });

  // The 'end' event indicates that the entire body has been received.
  req.on('end', () => {
    try {
      // const data = JSON.parse(body);
      // Write back something interesting to the user:
      res.write(body);
      res.end();
    } catch (er) {
      // uh oh! bad json!s
      res.statusCode = 400;
      return res.end(`error: ${er.message}`);
    }
  });
});

server.listen(1337);