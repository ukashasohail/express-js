const express = require('express');
const app = express();

app.use(express.json());


const students = [
    {id:01, name:"messi"},
    {id:02, name:"suarez"},
    {id:03, name:"coutinho"}    
];

app.get('/',(req,res)=>{
    res.send("<h1>hello world</h1>");
    res.send(students);
});

app.get('/students/:id',(req,res)=>{

    const student = students.find(s=>s.id===parseInt(req.params.id));
    if(!student){
        res.status(404).send("id is invalid");
        return;
    }
    res.send(student);
});

app.post('/students',(req,res)=>{
    const student ={
        id: students.length+1,
        name: req.body.name
    }
    students.push(student);
    res.send(student);
})

app.listen(3000, function(){
    console.log("the server is started at 3000");
});