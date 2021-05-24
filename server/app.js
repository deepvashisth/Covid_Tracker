const express = require("express");
const app = express();
const https=require('https')
  

const url="https://api.covid19india.org/data.json";

let data= '';

app.get('/api/stats', (req, res) => {
  
  https.get(url, function (resp) {
    console.log(resp.statusCode)
     

     resp.on('data', (chunk) => {
      data += chunk;
    });


  
  })
  
  .on("error", (err) => {
    console.log("Error: " + err.message);

  });

  res.json(data)
});

app.get('/QuizHelp',function(req,res){
  res.sendFile(__dirname + "src/component/Quiz.js");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
