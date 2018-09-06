const express = require('express');
const functions = require('./function_form3');
const router = express.Router();


router.post('/form3',function(req,res){
    Controller.AddForm3Details(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});

router.get('/viewfrom3/:sid',function (req,res) {
    Controller.GetCustomerPayment(req.params.sid).then(function (data) {
        res.status(data.status).send({data:data.studentdetails});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});

router.put('/form3/:sid',function (req,res) {
    Controller.UpdateForm3Details(req.params.sid,req.body).then(function (data) {
        res.status(data.status).send({data:data.message});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});

module.exports = router;