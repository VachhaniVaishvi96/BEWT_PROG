const http=require('http')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    // res.setHeader('content-type','text/plain')
    if(req.url==='/'){
        res.end("home page")
    }
    else if(req.url==='/about'){
        res.end('about page')
    }
    else if(req.url==='/contact'){
        res.end('contact page')
    }
    else if(req.url==='/footer'){
        res.end('footer page')
    }
    else if(req.url==='/header'){
        res.end('header page')
    }
    else{
        
        res.end("404 page not found")
    }
})
server.listen(3000,()=>{
    console.log("server started")
})