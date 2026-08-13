const os=require('os');
const path=require('path');
const fs=require('fs');

//console.log(os.platform())
//console.log(os.arch())
//console.log(os.cpus().length)
//console.log(os.homedir())
//console.log(os.totalmem()/(1024*1024*1024) + "GB");
//console.log(os.freemem()/(1024*1024*1024) + "GB");

//const file="WEB DEV-III/lecture5/core_modules.js";
//console.log(path.basename(file)); //file name
//console.log(path.extname(file));  //.js
//console.log(path.dirname(file));  // WEB DEV-III/lecture5

const data =fs.readFileSync("sample.txt","utf-8"); 
console.log(data);
//console.log("B")
//console.log("A")
fs.readFile("sample.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    } 
    })