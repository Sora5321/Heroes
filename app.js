const express = require("express")
const path = require("path")
const app = express()
app.use(express.static("images"))


app.get("/", (req, res)=>{
    let htmlPath = path.resolve(__dirname, "./carpeta/index.html")
    res.sendFile(htmlPath)
})
app.get("/alan", (req, res)=>{
    let htmlPath = path.resolve(__dirname, "./carpeta/Alan.html")
    res.sendFile(htmlPath)
})

app.get("/ada", (req, res)=>{
    let htmlPath = path.resolve(__dirname, "./carpeta/Ada.html")
    res.sendFile(htmlPath)
})

app.get("/hopper", (req, res)=>{
    let htmlPath = path.resolve(__dirname, "./carpeta/Hopper.html")
    res.sendFile(htmlPath)
})

app.get("/hamilton", (req, res)=>{
    let htmlPath = path.resolve(__dirname, "./carpeta/Margaret.html")
    res.sendFile(htmlPath)
})

app.get("/timothy", (req, res)=>{
    let htmlPath = path.resolve(__dirname, "./carpeta/Timothy.html")
    res.sendFile(htmlPath)
})

app.get("/charles", (req, res)=>{
    let htmlPath = path.resolve(__dirname, "./carpeta/Charles.html")
    res.sendFile(htmlPath)
})

app.get("/clarke", (req, res)=>{
    let htmlPath = path.resolve(__dirname, "./carpeta/Clarke.html")
    res.sendFile(htmlPath)
})

















app.listen(3000, ()=> console.log("Servidor Levantado"))