import express from "express"

const app = express()
const port = 3000

app.use((req,res,next)=>{
    console.log("Request Method: ",req.method)
    console.log("Request URL: ",req.url)
    next()
})

app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>")
})

app.listen(port,(req,res)=>{
    console.log(`Server starting on port ${port}`)
})