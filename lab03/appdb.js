const express = require("express");
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

mongoose.connect("mongodb://localhost/LocalDB")
    .then(console.log("mongo is connected"))
    .catch(err=>{console.log(err)});

require('./models/students');

const student = mongoose.model('students');

app.post('/student',(req,res)=>{
    const newstudent={
        id: req.body.id,
        name:req.body.name
    }
    new student(newstudent)
    .save()
    .then(s=>{
        res.send('student is added');
    })
    .catch(err=> console.log(err));
});

app.listen(3030, ()=>{
    console.log('server running');
})