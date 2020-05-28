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
// let ic = new InputChecker('Shelley', 'output');
// fs.createWriteStream('./' + 'output' + '.txt',
// {'flags' : 'a',
// 'encoding' : 'utf8',
// 'mode' : 0o666}
// );
fs.writeFile('./output.txt', 'out', function () { 
    console.log('write');
});
// try {
//     fs.readFileSync('./output.txt');
//     console.log('its read');
// } catch (err) {
//     console.log(err);

// }
fs.stat('./output.txt', (err, stats) => {
    console.log('stat');
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
});
fs.open('./output.txt', 'r', (err, fd) => {
    if (err) throw err;
    console.log(fd);
    fs.fstat(fd, (err, stat) => {
      if (err) throw err;
      // use stat
        console.log(stat);
  
      // always close the file descriptor!
      fs.close(fd, (err) => {
        if (err) throw err;
      });
    });
  });