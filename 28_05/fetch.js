const fetch = require('node-fetch');
const url_1 = 'https://github.com/typicode/demo/blob/master/db.json';
const url_2 = 'https://jsonplaceholder.typicode.com/todos/1';
const url_3 = 'https://my-json-server.typicode.com/typicode/demo/posts';
const url_4 = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
const url_5 = 'https://api.github.com/users/olegdzerin'

fetch(url_5)
    .then((response) => {
     //   console.log(response);
       // console.log(response.headers);
        // console.log(response.getAllResponseHeaders());
        return response.json();
    })
    .then((json) => {
        console.log(json);
      //  console.log(json.length);
    });

