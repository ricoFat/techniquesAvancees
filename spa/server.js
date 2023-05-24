const express = require('express')
const path =  require('path')
const app = express()

app.use("/static", express.static(path.resolve('frontend', 'static')))

app.get("/*",(req, res) => 
{
    res.sendFile(path.resolve(__dirname,'frontend', 'index.html'))
})

app.listen(8080, ()=>console.log('server running'))
