const express = require("express");
const app = express();

app.get('/', (request,response)=>{
    response.send("HELLO WORLD!!");
});

app.get('/student', (request,response)=>{
    var std = ["messi", "suarez","coutinho","arthur","busquets"];

    response.send(std);
});

app.get('/student/:index', (request,response)=>{
    var std = ["<h1>messi</h1>", "suarez","coutinho","arthur","busquets"];

    response.send(std[request.params.index]);
});

// app.get('/s', (request,response)=>{
//     response.sendFile(path.join(__dirname + './student.html'));
// });

app.listen(3000,()=>{
    console.log("listening on port 3000");
});