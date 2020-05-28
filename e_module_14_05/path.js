var path = require("path");
// const p = path.normalize("/foo/bar//baz/asdf/quux/../.");
// console.log(p);

// const rel = path.relative('C:\\orandea\\test\\aaa\\main.js', 'C:\\orandea\\impl\\bbb\\ccc');
// console.log(rel);

const EventEmitter = require('events');

module.exports = new EventEmitter();

// Do some work, and after some time emit
// the 'ready' event from the module itself.
setTimeout(() => {
  module.exports.emit('ready');
}, 1000);