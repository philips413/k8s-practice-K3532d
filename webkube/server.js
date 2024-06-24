var http = require("http");
var redis = require('redis');

var count = 0 ;
http.createServer(function (request, response) {
    var redisClient = redis.createClient({
        url: 'redis://redis-0.redis.default.svc.cluster.local:6379',
        legacyMode: true
    });
    redisClient.connect();

    redisClient.get('count', function (err, data) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(data);
    });
}).listen(8080);

console.log("Server running at http://127.0.0.1:8080");
