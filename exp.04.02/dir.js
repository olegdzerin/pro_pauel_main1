"use strict";
var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');
// fs.opendir('../data', function (err, dir) { 
//     console.log(dir);
// }
// );
// let openSync = fs.opendirSync;
// console.log(openSync);



async function print(path) {
  const dir = await fs.promises.opendir(path);
  for await (const dirent of dir) {
    console.log(dirent.name);
  }
}
print('./').catch(console.error);
print('../data');
// console.log(dir);
