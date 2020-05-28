var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    var name = require('url').parse(req.url, true).query.name;
    console.log(name);
if (name === undefined) name = 'world';
if (name == 'b') {
     var file = 'burd.jpg';
     fs.stat(file, function (err, stat) {
       if (err) {
        console.log(file);
        console.error(err);
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end("Sorry, Burningbird isn't around right now \n");
        } else {
        var img = fs.readFileSync(file);
        res.contentType = 'image/png';
        res.contentLength = stat.size;
        res.end(img, 'binary');
        }
     });
} else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello ' + name + '\n');
}
        }).listen(8120);
        