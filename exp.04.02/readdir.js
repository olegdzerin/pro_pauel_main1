let fs = require('fs');
let path = require('path');
let os = require('os');
fs.readdir('../exp.03.02', function (err,data) {
    if (err) console.log(err);
    console.log(data);
 });