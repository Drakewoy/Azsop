const express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static("public"));
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

const formData = [];

app.get('/', function(req, res){
  res.render("index");
});

// app.post();

// The login page 
app.get('/login', function(req, res) {
  res.render('sign_up', {info:formData});
});

app.post('/login', function(req, res){
  // the datain the signup form 
  let datas = {
    name:req.body.name,
    lastName:req.body.lastName,
    email:req.body.email,
    phone:req.body.phone,
    address:req.body.address,
    passwor:req.body.password,
  }
  formData.push(datas);
  res.redirect('/');

});

app.get('/electronic', function(req, res){
   res.render("electronic");
});

app.listen(process.env.PORT||3000, function(){
  console.log("sever  started successfully!");
}
);
