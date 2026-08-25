const express=require("express");
const app=express();
const PORT=3000

const users=[
    {id:101, name:"Alex", email:"alex@gmail.com"},
    {id:102, name:"Ravi", email:"ravikishan@gmail.com"},
    {id:103, name:"John", email:"john@gmail.com"},
    {id:104, name:"Vasu", email:"vasu@gmail.com"},
]


app.get("/",(req,res)=>{
    res.send("Hello Students"); //text or HTML
})

app.get("/about",(req,res)=>{
    res.send("<h1>Hello from about</h1>");
})

app.get("/users",(req,res)=>{
    res.json(users);  //JSON Format or object type 
})

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});