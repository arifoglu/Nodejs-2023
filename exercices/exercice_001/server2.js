const http = require('http');

const server = http.createServer((req ,res)=>{
    console.log("request made on browser")
// set header content type whatever we want we can add
    res.setHeader("Content-Type" , "text/html")

    res.write("<h1>Hello World</h1>");

    res.end();
});

server.listen(3000 ,"localhost" ,()=>{
    console.log("listening for on port 3000")
});