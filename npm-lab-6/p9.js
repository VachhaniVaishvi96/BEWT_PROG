const fs=require('fs')

if(fs.existsSync('config.json')){
    console.log("file exist");
    
}
else{
    console.log("file not exist");
}