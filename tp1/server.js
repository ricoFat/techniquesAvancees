const express = require('express')
const app = express();
const fs = require('fs')
const request = require('request')
const path =  require('path')

const port = 8080; // Choose a port for your API

app.get('/', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://v3.football.api-sports.io/leagues',
    headers: {
      'x-rapidapi-key': '5041d5aea62b74d4925fdfc66faa39d9',
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    
    // Save the response as a JSON file
    fs.writeFile(
      path.resolve(__dirname, 'frontend', 'static', 'js', 'view', 'league.json'),
      body,
      (err) => {
        if (err) {
          throw new Error(err);
        }
        console.log('API response saved as league.json');
      }
    );
  });
});


app.use("/static", express.static(path.resolve('frontend', 'static')))

app.get("/*",(req, res) => 
{
    res.sendFile(path.resolve(__dirname,'frontend', 'index.html'))
})

app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});

