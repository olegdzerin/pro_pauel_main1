// var fs = require('fs'),
// async = require('async');
// async.waterfall([
// function readData(callback) {
// fs.readFile('./data/data1.txt', 'utf8', function(err, data){
// callback(err,data);
// });
// },
// function modify(text, callback) {
// var adjdata=text.replace('as', 'oo');
// callback(null, adjdata);
// },
//     function writeData(text, callback) {
//         console.log(text);
//     fs.writeFile('./data/data1.txt', text, function (err) {
//         console.log(text);
// callback(err,text);
// });
// }
// ], function (err, result) {
// if (err) {
// console.error(err.message);
// } else {
// console.log(result);
// }
// });


var fs = require('fs'),
    async = require('async'),
    _dir = './data/';
let lengthFile = 0;
    fs.readdir(_dir, function(err, files) {
    if(err) {
        console.log(err);        
        };
        lengthFile = files.length;
        console.log(lengthFile);
           for (let i = 0; i < lengthFile; i++) { 
        changFiles(i);
        console.log(i);
    };
        });
var writeStream = fs.createWriteStream('./log.txt',
{'flags' : 'a',
'encoding' : 'utf8',
        'mode': 0666
    });
function changFiles(i) { 
    async.waterfall([
        function readDir(callback) {
        fs.readdir(_dir, function(err, files) {
        callback(err,files);
        });
        },
            function loopFiles(files, callback) {
                let file = files[i]; 
                callback(null, file);
        },
        function checkFile(file, callback) {
                fs.stat(_dir + file, function (err, stats) {
                    callback(err, stats, file);
                });
                },
                function readData(stats, file, callback) {
                if (stats.isFile())
                fs.readFile(_dir + file, 'utf8', function(err, data){
                callback(err,file,data);
                });
                },
                function modify(file, text, callback) {
                var adjdata=text.replace('as','sa');
                callback(null, file, adjdata);
                },
                function writeData(file, text, callback) {
                fs.writeFile(_dir + file, text, function(err) {
                callback(err,file);
                });
                },
                function logChange(file, callback) {
                writeStream.write('changed ' + file + '\n', 'utf8',
                function(err) {
                callback(err);
                });
                }
                ], function (err) {
                if (err) {
                console.error(err.message);
                 
                } else {
                console.log('modified files');
                }
                });
};
