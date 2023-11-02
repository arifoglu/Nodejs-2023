const http = require("http");
const fs = require("fs");

const server2 = http.createServer((req,res)=>{
    
    console.log("request made");
   
    console.log(req.url,req.method);

    // set header content type whatever we want we can add
    res.setHeader("Content-Type","text/html");

   // send an html file
   fs.readFile("./views/index.html", (err,data) =>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        // 1.option
        //res.write(data);
        //res.end();

        // 2.option more efficient // res.end(data)
        res.end(data);
    }
   });
});


server2.listen(3000, "localhost" , ()=>{
    console.log("listening for request on port 3000")
});