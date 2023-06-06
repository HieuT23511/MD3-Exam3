const http = require ('http');
const fs= require('fs')
const port = 8888;
const server = http.createServer((req,res)=>{
    res.end('ok')
})
server.listen(port,"localhost",()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
