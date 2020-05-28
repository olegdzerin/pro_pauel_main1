var us = require('underscore');
us.each(['apple', 'cherry'], function (fruit) { console.log(fruit); });
us.mixin({
    mix1: function () { console.log('mixin'); }
});
us.mix1();