const mongoose = require('../Configs/DBSchema_form1');
const configs = require('../Configs/configs');

const Form1Schema = mongoose.model('form1');



module.exports.submit_form1 = function (form1, callback) {
    if (form1.st_id == undefined){
        callback(null, "All Fields Are Required");
        return;
    }
    let newForm1Schema = new Form1Schema({

        st_id:form1.st_id,
        st_name:form1.st_name,
        st_address:form1.st_address,
        st_h_phone:form1.st_h_phone,
        st_m_phone:form1.st_m_phone,
        st_emails: form1.st_emails,
        st_semester:form1.st_semester,
        st_year:form1.st_year,
        st_cgpa:form1.st_cgpa,
        e_name:form1.e_name,
        e_address:form1.emit.e_address,
        su_name:form1.su_name,
        su_phone:form1.su_phone,
        su_title:form1.su_title,
        su_email:form1.su_email,
        int_start_date:form1.int_start_date,
        int_end_date:form1.int_end_date,
        hrs_per_week:form1.hrs_per_week,
        expected_task:form1.expected_task,
        learning_outcome:form1.learning_outcome,
        ext_su_name:form1.ext_su_name,
        date:form1.date
    });
    newForm1Schema.save(function (err, data) {
        if (err){
            callback(err);
            return;
        }
        callback(null, "Successfully Submited");
    });
}
