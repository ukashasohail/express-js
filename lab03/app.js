const express = require("express");
const app = express();
const mongoose = require('mongoose');

mongoose.Promise= global.Promise;

app.use(express.json());

var students = [{
        id: 01,
        name: "messi"
    },
    {
        id: 02,
        name: "suarez"
    },
    {
        id: 03,
        name: "coutinho"
    },
    {
        id: 04,
        name: "pique"
    }
];

app.get('/', (req, res) => {
    res.send(students);
});

app.post('/student/', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name
    }
    students.push(student);
    res.send(student);
});

app.put('/student/:id', (req, res) => {
    console.log(req.params.id);
    const student = students.find(s => s.id === parseInt(req.params.id));
    student.name = req.body.name;
    console.log(req.body.name);
    res.send(student);
});

app.delete('/student/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    const index = students.indexOf(student);
    students.splice(index, 1);
    res.send(student);
});

app.listen(3000, () => {
    console.log('Server is on 3000');
});