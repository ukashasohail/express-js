const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Schemastudent = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

mongoose.model('students', Schemastudent);