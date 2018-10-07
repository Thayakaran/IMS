const mongoose = require('../Configs/DBSchema_form7');
const Form7Schema = mongoose.model('form7');



module.exports.submit_form7 = function (form, callback) {
    if (form.studentId == "" || form.studentName == "" || form.studentPhone == "" || form.studentEmail == "" ||  form.employerName == "" || form.degreeTitle == "" || form.specialization == "" || form.duration == "" ||  form.credits == "" || form.title == "" || form.commentsBenefits == "" || form.commentsPerformance == "" || form.monthlyProgress == "" || form.internshipReport == "" || form.viva == "" || form.total == "" || form.grade == "" ||  form.examminer == "" ){
        callback("All Fields Are Required");
        return;
    }
    let newFormSchema = new Form7Schema({
        studentId: form.studentId,
        studentName: form.studentName,
        studentEmail: form.studentEmail,
        studentPhone: form.studentPhone,
        employerName: form.employerName,
        supervisorName: form.supervisorName,
        degreeTitle: form.degreeTitle,
        specialization: form.specialization,
        duration: form.duration,
        credits: form.credits,
        title: form.title,
        commentsBenefits: form.commentsBenefits,
        commentsPerformance: form.commentsPerformance,
        monthlyProgress: form.monthlyProgress,
        internshipReport: form.internshipReport,
        viva: form.viva,
        total: form.total,
        grade: form.grade,
        examminer: form.examminer
    });
    newFormSchema.save(function (err, data) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, "Successfully Added");
    });

};

