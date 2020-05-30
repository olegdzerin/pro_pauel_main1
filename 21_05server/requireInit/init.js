const querystring = require('querystring');
const http = require('http');
const req = require('./reqPost.js');
const chunk = require('../../17_05_os_process_http/chunk.js');
const postData = querystring.stringify({
    'msg': 'Hello World!'
});
req.write(chunk.chunk());
// req.on('data',);
req.end('write');