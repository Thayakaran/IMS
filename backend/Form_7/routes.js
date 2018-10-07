const express = require('express');
const functions = require('./functions');

const router = express.Router();

router.post('/form7', function (req, res) {

    functions.submit_form7(req.body, function (err, data) {
        if (!err){
            res.status(200).send({"success":data});
        }
        else{
            res.status(200).send({"error":err});
        }
    })
});

module.exports = router;