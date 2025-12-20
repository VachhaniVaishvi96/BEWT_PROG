const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("hello")
    }
})
server.listen(3000,()=>{
    console.log("server started hjvgh")
})