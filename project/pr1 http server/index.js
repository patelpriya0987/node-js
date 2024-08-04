const http = require('http');
const fs = require('fs');
const PROT = 3003;
const server = http.createServer((req,res) => {

    let random = `${Math.floor(Math.random() * 100)} - ${req.url} :: New Request`;
    fs.appendFile('demo.txt', random , ()=> {
        console.log("file created", random);
    })
    console.log(req.url);
    if(req.url === '/' ){
        fs.readFile('./index.html','utf-8',(err,data) =>{
            res.statusCode = 200;
            res.setHeader = ("Content-type" , "text/html");
            res.end(data)
        })
    }else if(req.url === '/about'){
        fs.readFile('./about.html','utf-8',(err,data) =>{
            res.statusCode = 200;
            res.setHeader = ("Content-type" , "text/html");
            res.end(data)
        })
    }else{
        fs.readFile('./404 error.html','utf-8',(err,data) =>{
            res.statusCode = 200;
            res.setHeader = ("Content-type" , "text/html");
            res.end(data)
        })
    }
    

})

server.listen(PROT , () => {
    console.log(`server is running on http://localhost:${PROT}`);
})
