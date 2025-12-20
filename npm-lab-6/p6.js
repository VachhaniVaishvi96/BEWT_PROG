const fs=require('fs')

fs.mkdir('my-data',(err)=>{
    if(err){
        if(err.code==='EEXIST'){
            console.log("already exist");
            
        }
        else{
            console.log("Error:",err);
            
        }
    }
    return;
})
console.log("Created");
