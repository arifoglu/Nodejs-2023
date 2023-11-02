const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req,res)=>{
    // console.log("request made");
    // console.log(req.url,req.method);

    //lodash
    const num = _.random(0,18);
    console.log(num);

    
    // set header content type whatever we want we can add
    res.setHeader("Content-Type","text/html");

    let path = "./views/";
    switch(req.url){
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        //if we want to redirect 
        case "/about-me":
            res.statusCode = 301;
            res.setHeader("location" ,"/about");
            res.end();
            break;  
        default :
            path += "404.html";
            res.statusCode = 404;
            break;         
    }

   // send an html file
   fs.readFile(path, (err,data) =>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        res.end(data);
    }
   });
});


server.listen(3000, "localhost" , ()=>{
    console.log("listening for request on port 3000")
});