var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var resHedersAll;
const url_1 = 'https://github.com/typicode/demo/blob/master/db.json';
const url_2 = 'https://jsonplaceholder.typicode.com/todos/1';
xhr.open('GET', url_1);
xhr.send();
// xhr.setRequestHeader("Content-Type", "type/json");
xhr.onload = function (e) {
    if (xhr.status === 200) {
         resHedersAll = xhr.getAllResponseHeaders();
        var resHeders = xhr.resHeders;
        var body = xhr.responseText
        console.log(resHedersAll);
        
        console.log(body);
        console.log(JSON.parse(body));
    } else { 
        console.log('wrong');
    }
};
module.exports.resHedersAll = resHedersAll;
 