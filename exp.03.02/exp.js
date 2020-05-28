var http = require('http');
var httpCreate = http.createServer(function (request, response) {
    response.writeHead(800, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
});
httpCreate.listen(8124);
console.log('httpCreate');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    console.log(`input${input}`);
if (input !== null) {
// Эхо-вывод текста
        process.stdout.write(input);
        var command = input.trim();
        if (command == 'exit')
        process.exit(0);
        }
});
        
     