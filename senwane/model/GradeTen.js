
let mongoose = require('mongoose');


let gradeTenSchema = new mongoose.Schema({
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
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("GradeTen", gradeTenSchema);