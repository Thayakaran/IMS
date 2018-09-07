const mongoose = require('./DBConnection');

const  Schema = mongoose.Schema;

const Form1Schema = new Schema({
    st_id:String,
    st_name:String,
    st_address:String,
    st_h_phone:String,
    st_m_phone:String,
    st_emails: [String],
    st_semester:String,
    st_year:String,
    st_cgpa:String,
    e_name:String,
    e_address:String,
    su_name:String,
    su_phone:String,
    su_title:String,
    su_email:String,
    int_start_date:String,
    int_end_date:String,
    hrs_per_week:String,
    expected_task:String,
    learning_outcome:String,
    ext_su_name:String,
    date:String



});

mongoose.model('form1' , Form1Schema);
module.exports = mongoose;