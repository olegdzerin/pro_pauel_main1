var util = require('util');
var eventEmitter = require('event').EventEmitter;
var SomeObj = function (name) { 
    // this.someObjInit = function () {
    this.name = name;
    //  };
};
util.inherits(SomeObj, eventEmitter);
SomeObj.prototype.someMethod() = function () { 
    this.emit('event');
}
var someObj = new SomeObj('re');
someObj.on('event', function () { console.log('event') });
someMethod();