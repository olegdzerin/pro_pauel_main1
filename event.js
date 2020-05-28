var eventEmitter = require('events').EventEmitter;
var em = new eventEmitter();
var counter = 1;
var callback = function (arg) { 
    return ++arg;
}
setTimeout(function () {
    // em.emit('event', args)
    em.emit('timed', callback(counter));
}, 3000);
em.on('timed', function (data) {
    console.log('timed' + data);
});
console.log(require.resolve('async'));