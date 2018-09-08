const nodemailer = require('nodemailer');
const fs = require('fs');
const mustache = require('mustache');


//For Sending Mail
module.exports.sendMail = function(messageHTML, receiverEmail, receiverName, subject){
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "assignmentsliit@gmail.com",
            pass: "Assignment@12345"
        }
    });
    let template = fs.readFileSync(__dirname+"/template.html","utf-8");
    let templateOptions = {name: receiverName, message: messageHTML, subject: subject};
    let output = mustache.render(template, templateOptions);
    let mailOptions = {
        from: '"IMS | SLIIT" <assignmentsliit@gmail.com>',
        to: receiverEmail,
        subject: subject,
        html: output
    };
    transporter.sendMail(mailOptions).then(function(dd){
        console.log("Mail Sent for "+mailOptions.to);
        return true;
    }).catch(function(err){
        console.log(err);
        console.log("Mail Sending error for "+mailOptions.to);
        return false;
    });
}
//Send Email for Supervisor Approval //sendMailSupervisorApproval('John Cena', 'IT16290972', 'p.puvipavan@gmail.com', 'Puvipavan', 'https://google.com', 'https://yahoo.com');
module.exports.sendMailSupervisorApproval = function(studentName, studentID, supervisorEmail, supervisorName, acceptLink, rejectLink) {
    let template = fs.readFileSync(__dirname + "/templateSupervisorVerification.html", "utf-8");
    let templateOptions = {studentName: studentName, studentID: studentID, accept: acceptLink, reject: rejectLink};
    let output = mustache.render(template, templateOptions);

    this.sendMail(output, supervisorEmail, supervisorName, "Supervisor Verification")
}
//Sending mail for forgotten password //sendMailForgotPassword('p.puvipavan@gmail.com', 'http://google.com');
module.exports.sendMailForgotPassword = function(email, resetlink){
    let template = fs.readFileSync(__dirname+"/templateForgotPassword.html","utf-8");
    let templateOptions = {link: resetlink};
    let output = mustache.render(template, templateOptions);

    this.sendMail(output, email, "there", "Password Reset Request")
}