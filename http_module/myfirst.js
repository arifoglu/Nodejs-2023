var http = require('http');
//it works but how to change ES module
http.createServer(function(req ,res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('Hello World');
}).listen(8080);

