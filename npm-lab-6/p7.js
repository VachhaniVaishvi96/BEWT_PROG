const fs=require('fs')

fs.readdir('../npm-lab-6',(err,data)=>{
    if(err){
        console.log(err);
        
    }
    else{
        data.forEach(( data,index)=>{
            const dataObject={
                id:index+1,data:data
            }
        })
        console.log(JSON.stringify(data));
        
    }
})