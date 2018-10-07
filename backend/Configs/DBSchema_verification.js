const mongoose = require('./DBConnection');

const  Schema = mongoose.Schema;

const VerificationSchema = new Schema({
    studentID:String,
    supervisorEmail:String,
    studentEmail: String,
    verificationCode:String,
    status:String
});

mongoose.model('verification', VerificationSchema);
module.exports = mongoose;