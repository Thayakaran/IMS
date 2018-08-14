const express = require('express');
const functions = require('./functions');

const router = express.Router();


router.post('/TestingInfo', function (req, res) {

    functions.addTestingInfo(req.body, function (err, data) {
        if (!err){
            res.status(200).send({"success":data});
        }
        else{
            res.status(400).send({"error":err});
        }
    })
});

router.post('/BloodReport', function (req, res) {

    functions.addBloodReport(req.body, function (err, data) {
        if (!err){
            res.status(200).send({"success":data});
        }
        else{
            res.status(400).send({"error":err});
        }
    })
});

router.get('/BloodReport/:referenceNo', function (req, res) {
    functions.getBloodReport(req.params.referenceNo , function (err, data) {
        if (!err){
            res.status(200).send({"success":data});
        }
        else{
            res.status(400).send({"error":err});
        }
    });
});


router.post('/UrineReport', function (req, res) {

    functions.addUrineReport(req.body, function (err, data) {
        if (!err){
            res.status(200).send({"success":data});
        }
        else{
            res.status(400).send({"error":err});
        }
    })
});

router.get('/UrineReport/:referenceNo', function (req, res) {
    functions.getUrineReport(req.params.referenceNo , function (err, data) {
        if (!err){
            res.status(200).send({"success":data});
        }
        else{
            res.status(400).send({"error":err});
        }
    });
});

router.put('/TestType/:Category', function (req, res) {

    functions.addTestType(req.params.Category, req.body). then(function (data) {
            res.status(200).send({"success":data});
    })
});

// router.get('/category', function (req, res) {
//     functions.getCategory(function (err, data) {
//         if (!err){
//             res.status(200).send({"success":data});
//         }
//         else{
//             res.status(400).send({"error":err});
//         }
//     });
// });
router.get('/TestType/testCategory', function (req, res) {
    functions.getTestCategory(function (err, data) {
        if (!err){
            res.status(200).send({"success":data});
        }
        else{
            res.status(400).send({"error":err});
        }
    });
});

router.get('/TestType/:testCategory/testName', function (req, res) {
    functions.getTestName(req.params.testCategory , function (err, data) {
        if (!err){
            res.status(200).send({"success":data});
        }
        else{
            res.status(400).send({"error":err});
        }
    });
});


module.exports = router;