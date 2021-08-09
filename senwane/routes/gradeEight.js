
const express = require('express');
const router = express.Router();
const GradeEight = require('../model/GradeEight');
const GradeNine = require('../model/gradeNine');
const GradeTen = require('../model/GradeTen');
const GradeEleven = require('../model/GradeEleven');
const GradeTwelve = require('../model/GradeTwelve');

router.get('/gradeEight', (req,res) => {
    GradeEight.find((err, data) => {
        if(err) throw err;
        res.send(data)
    });
});


router.post('/gradeEight', (req, res) => {
    GradeEight.create((req.body), (err, data) => {
        if(err) throw err;
        res.send(data)
    });
});

router.get('/gradeNine', (req,res) => {
    GradeNine.find((err, data) => {
        if(err) throw err;
        res.send(data)
    });
});


router.post('/gradeNine', (req, res) => {
    GradeNine.create((req.body), (err, data) => {
        if(err) throw err;
        res.send(data)
    });
});

router.get('/gradeTen', (req,res) => {
    GradeTen.find((err, data) => {
        if(err) throw err;
        res.send(data)
    });
});


router.post('/gradeTen', (req, res) => {
    GradeTen.create((req.body), (err, data) => {
        if(err) throw err;
        res.send(data)
    });
});

router.get('/gradeEleven', (req,res) => {
    GradeEleven.find((err, data) => {
        if(err) throw err;
        res.send(data)
    });
});


router.post('/gradeEleven', (req, res) => {
    GradeEleven.create((req.body), (err, data) => {
        if(err) throw err;
        res.send(data)
    });
});

router.get('/gradeTwelve', (req,res) => {
    GradeTwelve.find((err, data) => {
        if(err) throw err;
        res.send(data)
    });
});


router.post('/gradeTwelve', (req, res) => {
    GradeTwelve.create((req.body), (err, data) => {
        if(err) throw err;
        res.send(data)
    });
});

module.exports = router;