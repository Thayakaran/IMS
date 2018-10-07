const express = require('express');
const functions = require('./functions');
const email = require('../Common/functions');

const router = express.Router();

router.get('/verification/:code/:status', function (req, res) {
    let codes = {};
    codes.verificationCode = req.params.code;
    codes.status = req.params.status;

    functions.updateVerifyVerification(codes, function(err, data){

        if (!err){
            if (req.params.status == "approved"){ //Send email to ITM
                functions.getITEM(function (err, itm) {
                    if (!err) {
                        itm.email
                        email.sendSupervisorApprovedMail(itm.email, data.studentName, data.studentID)
                        res.status(200).send("<h2>Thank You.! Student Has Been Approved Successfully</h2>");
                        return;
                    }
                    res.status(400).send({"error":err});
                });
            }
            else if (req.params.status == "rejected"){ //Send Email to Student
                email.sendSupervisorRejectedMail(data.studentEmail, data.employer, data.supervisorName, data.supervisorEmail);
                res.status(200).send("<h2>Thank You.! Rejected Successfully</h2>");
            }
            else{
                res.status(400).send({"error":"Unknown Status"});
            }
        }
        else{
            res.status(400).send({"error":err});
        }
    });
});

module.exports = router;