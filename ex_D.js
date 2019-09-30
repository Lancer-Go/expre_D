var express=require("express");
var app=express();
var bodyParser=require('body-parser');
var myLogger=function(req,res,next){
    console.log('logged');
    next();
};
app.use(myLogger);
app.use(bodyParser.urlencoded({}));
app.use(bodyParser.text());
app.use('/', function(req,res){
    res.send(req.body);
    console.log(req.body);
});
app.listen(3000);