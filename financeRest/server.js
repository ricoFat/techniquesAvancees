const express = require('express')
const app = express();
const fs = require('fs')
const request = require('request')
const {PORT} = require('./config.js')
const {API_KEY} = require('./config.js')

app.get('/ticker=:id', function (req, res){
    const ticker = req.params.id
    console.log(ticker)
    const url =  'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+ticker+'&interval=5min&apikey='+API_KEY;

    request.get({
        url: url,
        json: true,
        headers: {'User-Agent': 'request'}
    }, (err, res, data) => {
        if(err){
            console.log('Error : ', err)
        } else if (res.statusCode !== 200) {
            console.log('Status', res.statusCode)
        } else {
            //console.log(data)
            const newData  = JSON.stringify(data)
            fs.writeFile(ticker+'.json', newData, err =>{
                if(err) throw err
                console.log('sucess')
            })
        }
    })
    res.end('Success')
})

app.get('/ticker-result=:id', function(req, res){
    const ticker = req.params.id
    fs.readFile(__dirname+"/"+ticker+".json", "utf8", function(err, data){
        res.send(JSON.parse(data))
    })
})

app.listen(PORT || 4001, () => {
    console.log('Server running on port', PORT)
})