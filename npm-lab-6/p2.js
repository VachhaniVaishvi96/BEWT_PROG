const fs=require('fs')

// data=fs.readFileSync('hello.txt','utf8')
// console.log(data)

try{
    data=fs.readFileSync('hello.txt','utf8')
    console.log(data)
}
catch(err){
    console.log("error")
}