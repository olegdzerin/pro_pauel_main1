// var fib = function (n) {
// 	if (n < 2) return n;
// 	return fib(n - 1) + fib(n - 2);
// };
// var Obj = function () {};
// Obj.prototype.doSomething = function (arg1_) {
// 	var callback_ = arguments[arguments.length - 1];
// 	callback = (typeof (callback_) == 'function' ? callback_ : null);
// 	var arg1 = typeof arg1_ === 'number' ? arg1_ : null;
// 	if (!arg1)
// 		return callback(new Error('first arg missing or not a number'));
// 	process.nextTick(function () {
// 		// Блокирующая операция
// 		var data = fib(arg1);
// 		callback(null, data);
// 	});
// }
// var test = new Obj();
// var number = 10;
// test.doSomething(10, function (err, value) {
// 	if (err)
// 		console.error(err);
// 	else
// 		// console.log('fibonaci value for %d is %d', number, value);
// 		console.log(number, value);
// });
// console.log('called doSomething');

//прклад2
var eventEmitter = require('events').EventEmitter;
var counter = 0;
var em = new eventEmitter();
setInterval(function() { em.emit('timed', counter++); }, 3000);
setTimeout(function(){ em.on('timed', function(data) {
    console.log('timed ' + data);
})},3000)
setInterval(function() { console.log('ds'); }, 1000);