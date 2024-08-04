const http = require('http');
const PROT = 3000;
const server = http.createServer((req,res) => {

    console.log(req.url);
    if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader = ("Content-type" , "text/plain");
        res.end("welcome in HTTP..")
    }else if(req.url === '/about'){
        res.statusCode = 200;
        res.setHeader = ("Content-type" , "text/plain");
        res.end("welcome to About..")
    }else{
        res.statusCode = 404;
        res.setHeader = ("Content-type" , "text/plain");
        res.end("page not found")
    }
    

})

server.listen(PROT , () => {
    console.log(`server is running on http://localhost:${PROT}`);
})
