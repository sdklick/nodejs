                     Nodejs Asynchronous File System crud oparation

const fs = require("fs");

fs.mkdir("newapp",(err)=>{
    console.log("event succeful");
    console.log(err);
})
fs.writeFile("read.txt","sumanta is a good programer",(err)=>{
    console.log("tern sucessful");
    console.log(err);
})
fs.appendFile("read.txt","world best developer",(err)=>{
    console.log("append sucessful");
    console.log(err);
})
fs.readFile("read.txt","utf8",(error,data)=>{
    console.log(data);
    console.log(error);
})
fs.unlink("read.txt",(error)=>{
    console.log("delete sucefully");
    console.log(error);
})
fs.rmdir("newapp",(err)=>{
    console.log("app del success");
    console.log(err);
})


