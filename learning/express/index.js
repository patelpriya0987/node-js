const express = require('express');
const fs = require('fs');
const server = express();
const PORT = 3003;
server.get('/',(req,res)=> {
    
    fs.appendFile("demo.txt",req.url, ()=>{
        console.log(req.url);
    })
    res.end("hello , welcome")
})
server.get('/about',(req,res)=> {
    
    fs.appendFile("demo.txt",req.url, ()=>{
        console.log(req.url);
    })
    res.end("hello , welcome to about")
})
server.listen(PORT, (err) => {
    console.log(`server is running on http://localhost:${PORT}`);
})