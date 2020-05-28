// var timer1 = setTimeout(function(name) {
//     console.log('Hello ' + name);
//     }, 30000, 'Shelley');
//     console.log("waiting on timer...");
//     setTimeout(function(timer) {
//     clearTimeout(timer);
//     console.log('cleared timer');
  //  }, 3000, timer1);
    //Приклад 2

//     var interval = setInterval(function(name) {
//         console.log('Hello ' + name);
//         }, 3000, 'Shelley');
//         setTimeout(function(interval) {
//         clearInterval(interval);
//             console.log('cleared timer');
//         }, 30000, interval);
// console.log('waiting on first interval...');
        // приклад 3
// var timer3 = setTimeout(function (data) {
//     console.log(data)
// }, 3000, 'exist');
//  timer3.unref();
// прик 4
var interval = setInterval(function(name) {
    console.log('Hello ' + name);
    }, 3000, 'Shelley');
    var timer = setTimeout(function(interval) {
    clearInterval(interval);
    console.log('cleared timer');
    }, 30000, interval);
    timer.unref();
    console.log('waiting on first interval...');