const express = require("express");
var app = express();



// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extend: true}));


app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.get('/login', function(req, res) {
  res.sendFile(__dirname + "/login.html");
});

app.listen(3000, console.log("sever  started successfully!"));
