const url=new URL("https://getbootstrap.com/")
url.pathname="path1/path2/path3"
url.searchParams.append("name","vidit")
url.searchParams.append("age",20)
url.searchParams.append("city","rajkot")

console.log("url:",url.toString())
console.log("url:",url)