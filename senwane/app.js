var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var gradeEightRouter = require('./routes/gradeEight');
var cors = require('cors')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/senwane', { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connection was successfull...")
})
.catch((err) => {
    console.error(err);
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// var corsOptions = {
//     origin: "http://localhost:4200"
// }

// app.use(cors(corsOptions))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/grades', gradeEightRouter);
module.exports = app;
