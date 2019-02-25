var express = require("express");
var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine","ejs");

app.get("/",function(request,response){
    response.render("index",{
        message: "This is my webpage"
    });
});

app.listen(8088,()=>{
    console.log("server started");
});