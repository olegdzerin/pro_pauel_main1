// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
let fs = require('fs');
let path = require('path');
let os = require('os');
fs.mkdir('./PRO', { recursive: true }, (err) => {
    if (err) throw err;
});
fs.mkdtemp(path.join(os.tmpdir(), 'foo-'), (err, folder) => {
    if (err) throw err;
    console.log(folder);
    // Prints: /tmp/foo-itXde2 or C:\Users\...\AppData\Local\Temp\foo-itXde2
  });