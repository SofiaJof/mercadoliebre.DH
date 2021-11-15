const express = require ("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req,res) =>{
    res.sendFile (__dirname + "/views/home.html")
  
})
app.get ("/registro", (req, res)=>{
    res.sendFile (__dirname + "/views/registro.html")
    
})
app.post ("/registro", (req,res)=>{
    res.redirect("/")
})
app.get ("/login", (req, res)=>{
    res.sendFile(__dirname + "/views/login.html")

})
app.post("/login", (req,res)=>{
    res.redirect("/")
})
const port= 3000;
app.listen(process.env.port||port, ()=>{
    console.log ("servidor corriendo");
})


