// не працює
let fs = require('fs');
let path = require('path');
let os = require('os');
fs.opendir('../data', function (err, dir) { 
    if (err) console.log(err);
    console.log(dir);
});