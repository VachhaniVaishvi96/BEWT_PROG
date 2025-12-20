const fs=require('fs')

fs.watch('.',(eventType,fileName)=>{
    if(fileName==='demo.txt'){
        console.log(`EventType:${eventType},FileName:${fileName}`);
        
    }
})