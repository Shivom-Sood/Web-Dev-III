const os=require('os');
const path=require('path');
const fs=require('fs');
const crypto=require('crypto');
const dns=require('dns');
const process=require('process');
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

//const data = fs.readFileSync("newFile.txt", "utf-8");
//console.log(data);
//console.log("B")
//console.log("A")
//fs.readFile("sample.txt","utf-8",(err,data)=>{
  //  if(err){
    //    console.log(err);
    //}else{
     //   console.log(data);
    //} 
    //})
    //fs.writeFileSync("./sample.txt","Hello this is updated content for the writefile method again",(err)=>{
      //  if(err)console.log(err)
        //    })

    //fs.appendFileSync("sample.txt","\nNew content")

    //fs.unlinkSync("./file.txt")

   //fs.renameSync("./sample.txt","newFile.txt") 
  // fs.copyFileSync("./newFile.txt","./copyFile.txt")

  //const password="Alex@1234"

  //const hash=crypto.createHash("sha256").update(password).digest("hex");
  //console.log(hash);

 // const salt=crypto.randomBytes(16).toString("hex")

 //dns.lookup("www.google.com",(err,address,family)=>{
    //if(err){
     //   console.log(err);
   // }else{
     //   console.log(address);
    //   console.log(family);
   // }
 //})

// dns.reverse("8.8.8.8",(err,hostnames)=>{
   // if(err){
   //     console.log(err);
   // }else{
      //  console.log(hostnames);
  //  }
 //})

//const data=process.argv;
//console.log(Number(data[2])+Number(data[3]));