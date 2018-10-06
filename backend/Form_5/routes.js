const express = require('express');
const functions = require('./functions');

const router = express.Router();

router.post('/form5', function (req, res) {

    functions.submit_form5(req.body, function (err, data) {
        if (!err){
            res.status(200).send({"success":data});
        }
        else{
            res.status(400).send({"error":err});
        }
    })
});

module.exports = router;