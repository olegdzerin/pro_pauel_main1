// var util = require('util');
// var eventEmitter = require('event').EventEmitter;
// var SomeObj = function () { 
//     // this.someObjInit = function () {

//     //  };
// };
// util.inherits(SomeObj, eventEmitter);
// SomeObj.prototype.someMethod() = function () { 
//     this.emit('event');
// }
// var someObj = new SomeObj();
// someObj.on('event', function () { console.log('event') });
// someMethod();

"use strict";
var util = require('util');
var log = require('./log.js').logOb();
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');

function InputChecker(name, file, fileRead) {
    this.name = name;
    this.writeStream = fs.createWriteStream('./' + file + '.txt', {
        'flags': 'a',
        'encoding': 'utf8',
        'mode': 0o666
    });
    this.readStream = fs.createReadStream('./' + fileRead + '.txt');
};
util.inherits(InputChecker, eventEmitter);
InputChecker.prototype.check = function check(input) {
  
    // Удаление лишних пропусков
    let command = input.trim().substr(0, 3);
    // Обработка команды
    // Команда wr: входные данные записываются в файл
    if (command == 'wr:') {
       // this.emit('write', input.substr(0, input.length));
       this.emit('write', log);
      
        // Команда en: процесс завершается
    } else if (command == 'en:') {
        this.emit('end');
        // Эхо-вывод в стандартный выходной поток
    } else {
        this.emit('echo', input);
    }
};
// Тестирование нового объекта и обработки событий
let ic = new InputChecker('Shelley', 'output');
ic.on('write', function(data) {
    console.log('writeStreem');
    console.log(data);
    this.writeStream.write(data, 'utf8');

});
ic.on('echo', function(data) {
    process.stdout.write(ic.name + ' wrote ' + data);
});
ic.on('end', function() {
    process.exit();
});

// Получение ввода после назначения кодировки
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
    let input = process.stdin.read();
    console.log(`input${input}`);
    if (input !== null) ic.check(input, );
});


