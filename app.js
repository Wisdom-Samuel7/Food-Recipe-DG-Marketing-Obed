const express = require("express")
const app = express()

app.set("view engine","ejs")
app.use(express.static('Public'))

app.get("/",(req,res)=>{
    res.render("../Views/main")
})

app.listen(5000,()=>{
    console.log("Server running on port 3000")
})
