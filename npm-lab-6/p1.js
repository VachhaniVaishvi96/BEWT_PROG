const fs =require ('fs')

fs.readFile('hello.txt','utf8',(err,data)=>{
    if(err){
        console.log("error:",err)
    }
    else{
        console.log(data)
    }
})
console.log("Hiii")