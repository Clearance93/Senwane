
let mongoose = require('mongoose');


let gradeElevenSchema = new mongoose.Schema({
    no: Number,
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    ethic: {
        type: String,
        requred: true
    },
    nationality: {
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("GradeEleven", gradeElevenSchema);