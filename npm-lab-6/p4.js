const fs=require('fs')

fs.appendFile('demo.txt'," data",(err)=>{
    if(err){
        console.log(err);
    }

})