//const mongoose = require('../Configs/DBSchema_employee');
//const configs = require('../Configs/configs');
const express = require('express');
const functions = require('./function_login');
const router = express.Router();


router.post('/login', function (req, res) {
    var user = {};
    user.email = req.body.email;
    user.password = req.body.password;

    if (user.email == undefined || user.password == undefined){
        res.status(202).json({"error":"Email & Password Required xxx"});
    }
    else {
        functions.login(user, function (err, token) {
            if (err){
                res.status(202).json({"error":"Invalid email or Password"});
            }
            else{
                res.status(200).json(token);
            }
        });
    }
});

module.exports = router;