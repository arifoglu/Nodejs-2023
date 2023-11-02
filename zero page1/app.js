const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{
    console.log("request made");
    console.log(req.url,req.method);

    // set Header
    res.setHeader("Content-Type" , "text/html");

    let path = "./pages/";
    switch(req.url){
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/button":
            path += "button.html";
            res.statusCode = 200;
            break;
        case "/form":
            path += "form.html";
            res.statusCode = 200;
            break;
        case "/validation":
            path += "validation.html";
            res.statusCode = 200;
            break; 
        default :
            path += "404.html";
            res.statusCode = 404;
            break;           
    }

    // send html file
    fs.readFile(path,(err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.end(data);
        };
    });

})

server.listen(3000 ,"localhost" ,()=>{
    console.log("listening for request on port 3000")
});