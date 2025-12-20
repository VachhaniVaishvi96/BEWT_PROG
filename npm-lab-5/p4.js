const url="https://getbootstrap.com/"
const urlObj=new URL(url)

console.log("Protocol:",urlObj.protocol)
console.log("Hostname:",urlObj.hostname)
console.log("Pathname:",urlObj.pathname)
console.log("Query Parameter:",urlObj.searchParams.forEach((value,key)=>{
    console.log(`\t${key}: ${value}`)
}))
