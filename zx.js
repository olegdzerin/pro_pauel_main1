// var text = 'as hjhasjk as';
// var text1 = text.replace('as', 'oo');
// console.log(text1);

// 2
// var fs = require('fs'),
// async = require('async'),
// _dir = './data/';
// function callback(err, files) { 
//     console.log(files);
// }
// fs.readdir(_dir, function(err, files) {
// callback(err,files);
// });

// 3

var fs = require('fs');
// var Mode = require('stat-mode');
fs.stat('./data/data2.txt', function (err, stats) {
    if (err) return console.log(err);
    // Получение разрешений
    console.log(stats);
    console.log(stats.isFile());
    
});