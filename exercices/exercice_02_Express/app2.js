const express = require("express");

const app = express();

 app.listen(3000);

 app.get('/' ,(req,res)=>{
    res.sendFile('./dev/index.html', { root : __dirname});
 })