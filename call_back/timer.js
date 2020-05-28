const fs = require('fs');

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('./file.txt', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation((err, data) => {
  //  console.log( "222222222222222222222222222222222222222222222222222" + data );
  const startCallback = Date.now();

  // do something that will take 10ms...
    while (Date.now() - startCallback < 1) {
        console.log( "11111111111111111111111111111111111111111111111111111111" + data );
    // do nothing
    //   console.log(Date.now() - startCallback);
    }

});
// fs.readFile('./file.txt', (err, data) => { 
//     if (err) { console.log('err')};
//     console.log(data);
// });
