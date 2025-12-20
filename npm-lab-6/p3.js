const fs=require('fs')

fs.writeFile('demo.txt',"welcome to demo",(err)=>{
    if(err){
        console.log(err)
    }
})
console.log("hi");
