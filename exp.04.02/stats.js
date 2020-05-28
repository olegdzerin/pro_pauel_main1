"use strict";
var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');
fs.stat('./dir.js', function (err, stats) { 
    if (err) console.log(err);
    console.log(stats.isDirectory());
    console.log(stats.isFile());
    console.log(stats.mode);
    console.log(stats);
})