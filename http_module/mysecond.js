var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function(req ,res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("Current date :" + dt.myDateTime());
    res.end('Hello World');
}).listen(8081);// if you want made work at the same time you have to change localhostnumber