const express = require('express');
const functions = require('./function_registration');
const router = express.Router();

router.post('/register', function (req, res) {
    var user = {};

    user.type = req.body.type;
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    if (user.email == undefined || user.password == undefined || user.type == undefined){
        res.status(202).json({"error":"Email & Password Required"});
    }
    else {
        functions.signup(user, function (err, result) {
            if (err){
                res.status(202).json({"error":err});
            }
            else{
                res.status(201).json({"success":result});
            }
        });
    }
});

module.exports = router;