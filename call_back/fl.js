const fs = require('fs');
const fileUrl = new URL('file:///D:/AAA/AAA.txt');

console.log(fs.readFileSync(fileUrl));
fs.readFile(fileUrl, function (err, data) { 
    if (err) { 
        console.log(err);
    }
    console.log(data);
})
