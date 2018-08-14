const mongoose = require('../Configs/DBSChema_Testing_MGMT');

const TestingInfoSchema = mongoose.model('TestingInfoSchema');
const BloodReportSchema = mongoose.model('BloodReportSchema');
const UrineReportSchema = mongoose.model('UrineReportSchema');
const TestTypeSchema = mongoose.model('TestTypeSchema');

//add apecimen information
module.exports.addTestingInfo = function(TestingInfo, callback){
    
    if (TestingInfo.type == undefined || TestingInfo.retention_Type == undefined || TestingInfo.collected_Date == undefined 
        || TestingInfo.stored_Date == undefined || TestingInfo.destroyed_Date == undefined || TestingInfo.tested_Date == undefined){

        callback(null, "All Fields Are Required");
        return;
    }
    let newTestingInfo = new TestingInfoSchema({
        patient_Id : TestingInfo.patient_Id,
        patient_Name :TestingInfo.patient_Name,
        gender : TestingInfo.gender,
        age: TestingInfo.age,
        Request_Id : TestingInfo.Request_Id,
        testCategory : TestingInfo.testCategory,
        testName : TestingInfo.testName,
        Collection_Center : TestingInfo.Collection_Center,
        type: TestingInfo.type,
        retention_Type: TestingInfo.retention_Type,
        collected_Date: TestingInfo.collected_Date,
        stored_Date: TestingInfo.stored_Date,
        destroyed_Date: TestingInfo.destroyed_Date,
        tested_Date: TestingInfo.tested_Date
    });
    newTestingInfo.save(function (err, data) {
        if (err){
            callback(err);
            return;
        }
        callback(null, "Successfully Added");
    });
}

//add blood report data
module.exports.addBloodReport = function(BloodReport, callback){
      
    if (BloodReport.patient_Name == undefined || BloodReport.age == undefined || BloodReport.gender == undefined 
        || BloodReport.reference_No == undefined || BloodReport.requested_By == undefined || BloodReport.specimen == undefined){

        callback(null, "Important Fields Are Required");

        return;
    }
    let newBloodReport = new BloodReportSchema({
        patient_Id : BloodReport.patient_Id,
        patient_Name: BloodReport.patient_Name,
        age: BloodReport.age,
        gender: BloodReport.gender,
        reference_No: BloodReport.reference_No,
        requested_By: BloodReport.requested_By,
        specimen: BloodReport.specimen,
        haemoglobin: BloodReport.haemoglobin,
        RBC: BloodReport.RBC,
        HCT: BloodReport.HCT,
        MCV: BloodReport.MCV,
        MCH: BloodReport.MCH,
        MCHC: BloodReport.MCHC,
        RDW_SD: BloodReport.RDW_SD,
        RDW_CV: BloodReport.RDW_CV,
        WBC: BloodReport.WBC,
        neutrophils: BloodReport.neutrophils,
        lymphocytes: BloodReport.lymphocytes,
        eosinophils: BloodReport.eosinophils,
        monocytes: BloodReport.monocytes,
        basophils: BloodReport.basophils,
        platelet_Count: BloodReport.platelet_Count,
        PDW: BloodReport.PDW,
        MPV: BloodReport.MPV,
        P_LCR: BloodReport.P_LCR,
        comments: BloodReport.comments,
        notes: BloodReport.notes,
        testing_Staff: BloodReport.testing_Staff
    });
    newBloodReport.save(function (err, data) {
        if (err){
            callback(err);
            return;
        }
        callback(null, "Successfully Added");
    });
}

//get blood report for patient id
module.exports.getBloodReport = function (referenceNo , callback) {
    BloodReportSchema.find({reference_No:referenceNo}).exec().then(function (data) {
        callback(null, data);
    }).catch(function (err) {
        callback(err);
    })
}


//add urine report data
module.exports.addUrineReport = function(UrineReport, callback){
      
    if (UrineReport.patient_Name == undefined || UrineReport.age == undefined || UrineReport.gender == undefined 
        || UrineReport.reference_No == undefined || UrineReport.requested_By == undefined || UrineReport.specimen == undefined){
        callback(null, "Important Fields Are Required");
        return;
    }
    let newUrineReport = new UrineReportSchema({
        patient_Id : UrineReport.patient_Id,
        patient_Name: UrineReport.patient_Name,
        age: UrineReport.age,
        gender: UrineReport.gender,
        reference_No: UrineReport.reference_No,
        requested_By: UrineReport.requested_By,
        specimen: UrineReport.specimen,
        color: UrineReport.color,
        appearance: UrineReport.appearance,
        specifi_Gravity: UrineReport.specifi_Gravity,
        PH: UrineReport.PH,
        glucose: UrineReport.glucose,
        RBC: UrineReport.RBC,
        WBC: UrineReport.WBC,
        protein: UrineReport.protein,
        nitrite: UrineReport.nitrite,
        crystal: UrineReport.crystal,
        calcium: UrineReport.calcium,
        yeast: UrineReport.yeast,
        comments: UrineReport.comments,
        notes: UrineReport.notes,
        testing_Staff: UrineReport.testing_Staff
        
    });
    newUrineReport.save(function (err, data) {
        if (err){
            callback(err);
            return;
        }
        callback(null, "Successfully Added");
    });
}

//get Urine report for patient id
module.exports.getUrineReport = function (referenceNo , callback) {
    UrineReportSchema.find({reference_No:referenceNo}).exec().then(function (data) {
        if(data.length == 0){
            callback("Report Not Ready");
        }
        else{
            callback(null, data);
        }
    }).catch(function (err) {
        callback(err);
    })
}


//add new test type
module.exports.addTestType = function(Category, TestType){
    return new Promise(function (resolve, reject) {
        TestTypeSchema.find({testCategory: Category}).exec().then(function(data){
            if(data.length != 0){
                let status;
                for(let i=0; i<data[0].testNames.length; i++){
                    if(data[0].testNames[i] == TestType.testNames){
                        status = "Yes";
                        resolve({status: 200, message: "Same Test Available"});
                        break;
                    }
                    else{
                        status = "No";
                    }
                }
                if(status == "No"){
                    TestTypeSchema.update({testCategory: Category},{ "$push": { "testNames": TestType.testNames } }).exec().then(function () {
                        resolve({status: 200, message: "New Test Name Added"});
                    });
                }
            }
            else{
                let newTestType = new TestTypeSchema({
                    testCategory:TestType.testCategory,
                    testNames:TestType.testNames
                });
                newTestType.save().then(function () {
                    resolve({status:200, message:"New Test Added"});
                }).catch(function (err) {
                    reject({status:500, message:"Failed to Add Test"});
                });
            }
        });
    });
}


module.exports.getTestCategory = function (callback) {
    TestTypeSchema.find().select('testCategory -_id').exec().then(function (data) {
        callback(null, data);
    }).catch(function (err) {
        callback(err);
    })
}

module.exports.getTestName = function (testCategory , callback) {
    TestTypeSchema.find({testCategory:testCategory}).select('testNames -_id').exec().then(function (data) {
        callback(null, data);
    }).catch(function (err) {
        callback(err);
    })
}

// module.exports.getCategory = function (callback) {
//     CategorySchema.find().exec().then(function (data) {
//         callback(null, data);
//     }).catch(function (err) {
//         callback(err);
//     })
// }