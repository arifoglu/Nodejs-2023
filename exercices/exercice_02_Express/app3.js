const express = require("express");

const app = express();

 app.listen(3000);

 app.get('/' ,(req,res)=>{
    res.sendFile('./dev/index.html', { root : __dirname});
 });
 //about page
 app.get('/about' ,(req,res)=>{
    res.sendFile('./dev/about.html', { root : __dirname});
 });
 // 404 page
 app.use((req,res)=>{
    res.status(404).sendFile('./dev/404.html', { root : __dirname});
 });