const express = require('express')
const app = express()
const fs = require ('fs')
const bodyParser = require('body-parser')
const { stringify } = require('querystring')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends:true}))

app.get('/list-users', function (req, res) 
{
    fs.readFile(__dirname +"/user.json", "utf8", function (err, data) 
    {
        if(err) throw err;
        console.log(data);
        res.end(data);
    })
});

/* let user =  {
    "user4":
    {
        "name": "Erick",
        "password": "a1b2c3",
        "profession": "Director",
        "id": 4
    }
} */  

app.get('/form', function (req, res) 
{
    res.sendFile(__dirname +'/form.html');
});

app.get('/form-update', function (req, res) 
{
    res.sendFile(__dirname +'/form-update.html');
});

app.get('/id=:id' , function (req, res) {

    fs.readFile(__dirname +"/user.json","utf-8", function (err, data) 
    {
        const users = JSON.parse(data)
        const user = users["user" + req.params.id]
    })
    console.log(user);
    res.end(JSON,stringify(user))
    
})



app.post('/add-user', function (req, res) 
{

    fs.readFile(__dirname+"/user.json","utf-8", function (err, data) 
    {
        data = JSON.parse(data)
        data['user' + req.body.id] = req.body
        let newData = JSON.stringify(data)
        fs.writeFile(__dirname+"/user.json", newData, err =>{
            if(err) console.log("succeès");
        })
    })
})

app.listen(8081 , function(req, res)
{
    console.log("listenin at port 8081");   
});
