const http = require('http');

const server = http.createServer((req , res)=>{
    console.log("request made");
    // if you want to show this text you can add into  
   //  res.writeHead(200, {'Content-Type' : 'text/html'});
  //   res.end('Hello World');
    console.log(req.url, req.method);

    // set header content type whatever we want we can add
    res.setHeader("Content-Type","text/html");
    res.write("hello world");

    res.write("<h1>HI</h1>");

    res.write("<p style='color:red'>Salut</p>");
    
    res.write("<h3>HI</h3>");
    res.write("<style>h3{border: 1px solid red}</style>")
    res.end();
});

server.listen(3000, "localhost" , ()=>{
    console.log("listening for request on port 3000")
});

