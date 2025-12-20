const path = require('path');

// const dirname=path.dirname('./abc/xyz/vaish.txt');
// const fname=path.basename('./abc/xyz/vaish.txt');
// const ename=path.extname('./abc/xyz/vaish.txt');
// const resolve=path.resolve('./abc/xyz/vaish.txt');
// const join=path.join('users','arjun','documents','project');
// const normalize=path.normalize('//folder//subfolder////file.txt');

// console.log("dirname:",dirname);
// console.log("file name:",fname);
// console.log("extension:",ename);
// console.log("full path:",resolve);
// console.log("full path:",__filename);
// console.log("join path:",join);
// console.log("nomalize path:",normalize);



//4.check path is absolute or relative

// const ans=path.isAbsolute('//server');

// console.log(ans);


//5
// const resolve=path.resolve('folder/subfolder/app.js');
// console.log(resolve)

const os=require('os');
//6

// console.log(os.type())
// console.log(os.version())
// console.log(os.platform())
// console.log(os.arch())

//7
// const memory=os.totalmem()
// console.log(memory/(3*1024));
// console.log(os.freemem());

//8
// console.log(os.userInfo())

//9
// const time=os.uptime()
// console.log("in second:",time)
// console.log("in hour:",time/3600)
// console.log("in minute:",time/60)

//10
// console.log(os.cpus())
// console.log(os.networkInterfaces())