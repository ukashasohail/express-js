var express = require("express");

var app = express();
//app.use will handle get, post, put, delete

app.use(function(req,res){
    res.send("<h1> hello world from middleware</h1>");
})

app.listen(3030);