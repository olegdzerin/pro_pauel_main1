const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );  
$.getJSON("https://jsonplaceholder.typicode.com/todos/1", function (json) { 
    console.log(json);
});
// $.ajax({
//     url: "https://jsonplaceholder.typicode.com/todos/1",
//     success: function (data) { 
//         console.log(data);
//     }
// })
