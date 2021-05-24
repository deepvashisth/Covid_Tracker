const { response } = require("express");
const express = require("express");
const app = express();
const https=require('https')
  





app.get('/api/stats', async (req, res) => {
  
  const url="https://api.covid19india.org/data.json";
  const fetch_response=await fetch(url);
  const data =await fetch_response.json();
  res.json(data)
  


 

  
  
  
});
  
const PORT = process.env.PORT || 5000;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));