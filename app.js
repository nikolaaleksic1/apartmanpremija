var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");


mongoose.connect("mongodb://localhost/apartmanPremija");
//mongoose.connect("mongodb://alex:premija@ds143342.mlab.com:43342/premija");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));


app.get("/", function(req, res){
   res.render("index"); 
});

app.get("/banjaVrdnik", function(req,res){
   res.render("banjaVrdnik"); 
});

app.get("/contakt", function(req, res){
   res.render("contakt"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Started!"); 
});