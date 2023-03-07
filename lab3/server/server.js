const express= require("express")
const app=express()
let PORT =process.env.PORT|| "7002"
const path= require("path")
const bodypar=require("body-parser")
app.use(bodypar.json())
app.use(bodypar.urlencoded({extended:true}))

app.get('/form.html',(req,res)=>{
   res.sendFile(path.join(__dirname,"../form/form.html")) 
})
app.get('/form.css',(req,res)=>{
    res.sendFile(path.join(__dirname,"../form/form.css")) 
 })
 app.get('/profile.html',(req,res)=>{
    res.sendFile(path.join(__dirname,"../form/profile.html")) 
   })
 app.get('/4110786-959008197.jpg',(req,res)=>{
    res.sendFile(path.join(__dirname,"../form//4110786-959008197.jpg"))  
 })
   

app.post("/profile.html",(req,res)=>{
console.log(req.body);

let name=req.body.name
//console.log(req.body.name);
let email=req.body.email
//console.log(req.body.email);

let address=req.body.address
//console.log(req.body.address);
let tel =req.body.tel
//console.log(req.body.tel);
res.send("<h1>welcom :"+name+" yor entered data as follows</h1><br><h1>Email :"+ email +"</h1><br><h1>Email :"+address+"</h1><br><h1>tel :"+ tel+"</h1><br>")

})

app.listen(PORT,()=>{console.log("http/"+PORT)})