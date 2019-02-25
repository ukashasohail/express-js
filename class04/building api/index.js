var express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("<h1> FC BARCELONA </h1>");
});

app.listen(3030,function(){
    console.log('hello');
});