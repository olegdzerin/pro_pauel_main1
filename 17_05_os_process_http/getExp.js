const http = require('http'); 
const os = require("os");
// http.get('http://www.google.com', (res) => {
//     console.log(res);
// });
console.log("totalmem"+os.totalmem);
console.log("freemem" + os.freemem);
console.log("EOL" + os.EOL);
console.log(os.type);
console.log(os.userInfo());