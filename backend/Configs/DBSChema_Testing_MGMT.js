const mongoose = require('./DBConnection');

const  Schema = mongoose.Schema;

const TestingInfoSchema = new Schema({
    patient_Id : String,
    patient_Name :String,
    gender : String,
    age:Number,
    Request_Id : String,
    testCategory : String,
    testName : String,
    Collection_Center : String,
    type:String,
    retention_Type:String,
    collected_Date:Date,
    stored_Date:Date,
    destroyed_Date:Date,
    tested_Date:Date

});

const  BloodReportSchema = new Schema({
    patient_Id : String,
    patient_Name :String,
    age:Number,
    gender:String,
    reference_No:String,
    requested_By:String,
    specimen:String,
    haemoglobin:Number,
    RBC:Number,
    HCT:Number,
    MCV:Number,
    MCH:Number,
    MCHC:Number,
    RDW_SD:Number,
    RDW_CV:Number,
    WBC:Number,
    neutrophils:Number,
    lymphocytes:Number,
    eosinophils:Number,
    monocytes:Number,
    basophils:Number,
    platelet_Count:Number,
    PDW:Number,
    MPV:Number,
    P_LCR:Number,
    comments:String,
    notes:String,
    testing_Staff:String
});


const  UrineReportSchema = new Schema({
    patient_Id : String,
    patient_Name :String,
    age:Number,
    gender:String,
    reference_No:String,
    requested_By:String,
    specimen:String,
    color:String,
    appearance:String,
    specifi_Gravity:Number,
    PH:Number,
    glucose:String,
    RBC:Number,
    WBC:Number,
    protein:String,
    nitrite:String,
    crystal:Number,
    calcium:Number,
    yeast:Number,
    comments:String,
    notes:String,
    testing_Staff:String
});

const TestTypeSchema = new Schema({
    testCategory:String,
    testNames:[String]

});




mongoose.model('TestingInfoSchema' , TestingInfoSchema);
mongoose.model('BloodReportSchema' , BloodReportSchema);
mongoose.model('UrineReportSchema' , UrineReportSchema);
mongoose.model('TestTypeSchema' , TestTypeSchema);


module.exports = mongoose;