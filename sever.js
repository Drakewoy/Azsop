const express = require("express");
var app = express();
app.use(express.static("public"));



// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extend: true}));


app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.get('/login', function(req, res) {
  res.sendFile(__dirname + "/login.html");
});

app.listen(process.env.PORT||3000, function(){
  console.log("sever  started successfully!");
}
);
