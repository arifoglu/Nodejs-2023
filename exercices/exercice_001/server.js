const http = require('http');

// for create a server

const server = http.createServer((req ,res)=>{
    console.log("request made on browser");
});

server.listen(3000 ,"localhost" ,()=>{
    console.log("listening for on port 3000")
});

