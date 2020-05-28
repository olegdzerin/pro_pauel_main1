var fs = require('fs');
var path = require('path');
fs.writeFile('./zlibInput.txt', 'inputWrite', function (err) {
    if (err) {
        console.log(err);
    };
    fs.readFile('./zlibInput.txt', 'utf-8', function (err, data) {
        if (err) {
            console.log(err);
        };
        console.log(data);
      //  console.log(__dirname);
    });

});
// console.log(__dirname);
// console.log(require.main.filename);
console.log(path.parse(require.main.filename));