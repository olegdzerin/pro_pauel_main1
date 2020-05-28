const fs = require('fs');

// destination.txt will be created or overwritten by default.
fs.copyFile('./output.txt', './destination.txt', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});
fs.link('./dataLink', '../data', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
  });