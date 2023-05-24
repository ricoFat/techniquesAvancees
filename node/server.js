const express = require('express')
const app = express()

app.get('/', function name(req , res) 
{
    res.send('Hello Word!')
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
   
    console.log("Example app listening at http://%s:%s", host, port)
   })
   