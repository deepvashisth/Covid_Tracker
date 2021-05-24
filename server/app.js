const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/QuizHelp',function(req,res){
  res.sendFile(__dirname + "src/component/Quiz.js");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
