const mongoose = require('./DBConnection');

const  Schema = mongoose.Schema;

const Form7Schema = new Schema({
    studentId: String,
    studentName: String,
    studentEmail: String,
    studentPhone: String,
    employerName: String,
    supervisorName: String,
    degreeTitle: String,
    specialization: String,
    duration:String,
    credits: Number,
    title: String,
    commentsBenefits: String,
    commentsPerformance: String,
    monthlyProgress: Number,
    internshipReport: Number,
    viva: Number,
    total: Number,
    grade: String,
    examminer: String
});

mongoose.model('form7' , Form7Schema);
module.exports = mongoose;