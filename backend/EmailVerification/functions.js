const mongoose = require('../Configs/DBSchema_verification');
const users = require('../Configs/DBSchema_employee');
const configs = require('../Configs/configs');
const md5 = require('md5');

const verificationSchema = mongoose.model('verification');
const userSchema = users.model('user');

//This is for adding Verification code into the database. It will add md5 string
module.exports.addVerificationCode = function (studentCode, callback){
    if (studentCode.studentID == undefined || studentCode.employer == undefined || studentCode.supervisorName == undefined || studentCode.studentEmail == undefined || studentCode.supervisorEmail == undefined){
        callback("All Fields Are Required");
        return;
    }
    let code = md5(Math.random()+" " + Date.now());
    verificationSchema.find({studentID: studentCode.studentID}).exec().then(function (data) {
        data[0].verificationCode = code;
        data[0].supervisorEmail= studentCode.supervisorEmail;
        data[0].studentEmail= studentCode.studentEmail;
        data[0].status= "pending"
        data[0].save();
        callback(null, code);

    }).catch(function (err) {
        let newVerificationSchema = new verificationSchema({
            studentID: studentCode.studentID,
            supervisorEmail: studentCode.supervisorEmail,
            verificationCode: code, //Generating Random Number And getting current time for md5 hashing. Also added space middle of them
            studentEmail: studentCode.studentEmail,
            status: "pending"
        });

        newVerificationSchema.save(function (err) {
            if (err){
                callback(err);
                return;
            }
            callback(null, code);
        });
    })

};

//This function will verify and update the status
module.exports.updateVerifyVerification = function (studentCode, callback){
    if (studentCode.verificationCode == undefined || studentCode.status == undefined){
        callback("All Fields Are Required");
        return;
    }
    verificationSchema.find({verificationCode: studentCode.verificationCode, status: "pending"}).exec().then(function (data) {
        console.log(data);
        console.log(data.length);
        if (data.length == 0){
            console.log('Came Here');
            return callback("Invalid Verification Code or Already Processed Code");
        }
        if (studentCode.status == "approved"){
            data[0].status = "approved";
        }
        else if(studentCode.status == "rejected"){
            data[0].status = "rejected";
        }
        else {
            callback("Unknown Status");
        }
        data[0].save();
        callback(null, data[0]);
    }).catch(function (err) {
        callback("Invalid Verification Code");
    })
};

//Get the Details of the user Type ITM
module.exports.getITEM = function (callback){
    userSchema.find({type: "itm"}).exec().then(function (data) {
        if (data.length == 0){
            return callback("ITM NOT Found");
        }
        return callback(null, data[0]);
    }).catch(function (err) {
        callback(err);
    })
};