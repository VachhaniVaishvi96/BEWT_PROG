const fs=require('fs')

fs.copyFile('hello.txt','demo.txt',(err)=>{
    if(err){
        console.log(err);
        
    }
})