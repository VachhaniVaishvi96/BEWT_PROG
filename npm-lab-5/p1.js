const cd=require('child_process')

cd.exec("node --version",(err,stdout,stderr)=>{
    if(err){
        console.log("Error:",err)
    }
    if(stderr){
        console.log("STDERR:",stderr)
    }
    console.log("stdout:",stdout)
})