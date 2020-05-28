"use strict";
var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');
function InputChecker (name, file) {
this.name = name;
this.writeStream = fs.createWriteStream('./' + file + '.txt',
{'flags' : 'a',
'encoding' : 'utf8',
'mode' : 0o666});
};

let ic = new InputChecker('Shelley', 'output');
// console.log(ic.writeStream);

let writeStr = ic.writeStream;
console.log(writeStr.bytesWritten);
writeStr.on('open', function () { 
    console.log('writeStrim: open');
});
writeStr.on('close', function () { 
    console.log('writeStrim: close');
});
