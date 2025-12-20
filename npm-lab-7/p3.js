const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile("home.txt",(err,data)=>{
            if(err){
                res.end(err)
            }
            res.end(data)
        })
    }
    else if(req.url==='/about'){
       fs.readFile("about.txt",(err,data)=>{
            if(err){
                res.end(err)
            }
            res.end(data)
        })
    }
    // else if(req.url==='/contact'){
    //     res.end('contact page')
    // }
    // else if(req.url==='/footer'){
    //     res.end('footer page')
    // }
    // else if(req.url==='/header'){
    //     res.end('header page')
    // }
    else{
        res.end("404 page not found")
    }
})
server.listen(3000,()=>{
    console.log("server started")
})