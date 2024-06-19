let server = require('http');
var os = require('os');
var path = os.hostname();

server.createServer(function (request, response) {
    response.setHeader('Content-Type', 'text/plain');
    response.end(`Hello World!-${path}`);
}).listen(8080);

console.log("Server running at 127.0.0.1:8080");
