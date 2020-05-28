"use strict";
var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');

// function InputChecker(name, file) {
//     this.name = name;
//     this.writeStream = fs.createWriteStream('./' + file + '.txt', {
//         'flags': 'a',
//         'encoding': 'utf8',
//         'mode': 0o666
//     });
// };
// fs.createWriteStream('./' + 'file' + '.txt', {
//             'flags': 'a',
//             'encoding': 'utf8',
//             'mode': 0o666
//         }).write('jkjkjkjkjkj', 'utf8');


var fileRead = 'output';
var readData = fs.createReadStream('./' + fileRead + '.txt', {
    'flags': 'a',
    'encoding': 'utf8',
    'mode': 0o666
}).
    read();
console.log(readData);