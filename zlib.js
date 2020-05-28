var zlib = require('zlib'); 
var gzip = zlib.createGzip();
var fs = require('fs');
var inp = fs.createReadStream('zlibInput.txt');
var out = fs.createWriteStream('zlibInput.txt.gz');
var out1 = fs.createWriteStream('zlibInput1.txt');
inp.pipe(gzip).pipe(out);
inp.pipe(out1);