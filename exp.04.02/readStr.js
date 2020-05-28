"use strict";
var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');
// function InputChecker (name, file) {
// this.name = name;
// this.writeStream = fs.createWriteStream('./' + file + '.txt',
// {'flags' : 'a',
// 'encoding' : 'utf8',
// 'mode' : 0o666});
// };

// let ic = new InputChecker('Shelley', 'output');
// // console.log(ic.writeStream);

//let writeStr = ic.writeStream;
fs.
fs.readFile('./output.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
let readStream = fs.createReadStream('./output.txt');
readStream.on('open', function (err, fd) { 
    console.log("open");
    console.log(fd);
});
readStream.on('ready', function (err, fd) { 
    console.log("ready");
    console.log(fd);
});
readStream.on('close', function (err, fd) { 
    console.log("close");
    console.log(fd);
});
// console.log(readStream.path);
console.log(readStream.pending);
console.log(readStream.bytesRead);
readStream._read(4);
