const form3Mongo = require("../Configs/DBSchema_form3");
const form1Mongo = require("../Configs/DBSchema_form1");

const InternalTrainingInfoSchema = form3Mongo.model(
  "form3InternalTrainingInfoSchema"
);

const InternInfoSchema = form1Mongo.model("form1");

const taskDetails = form3Mongo.model("form3TaskDetails");

var Controller = function() {
  this.getInternshipInfo = function(studentID) {
    return new Promise(function(resolve, reject) {
      InternInfoSchema.find({ st_id: studentID })
        .exec()
        .then(function(data) {
          resolve({ status: 200, internshipInformation: data });
        })
        .catch(function(err) {
          reject({
            status: 500,
            message: "Error finding internship Information - " + err
          });
        });
    });
  };

  this.addInternalTrainingInfo = function(data) {
    return new Promise(function(resolve, reject) {
      var internalTrainingInfo = new InternalTrainingInfoSchema({
        studentID: data.studentID,
        trainingParty: data.trainingParty,
        trainingDescription: data.trainingDescription,
        dateFrom: data.dateFrom,
        dateTo: data.dateTo
      });

      internalTrainingInfo
        .save()
        .then(function() {
          resolve({
            status: 200,
            message: "Internal training information successfully added"
          });
        })
        .catch(function(err) {
          reject({
            status: 500,
            message: "Error adding internal training information - " + err
          });
        });
    });
  };

  this.getInternalTrainingInfo = function(studentID) {
    return new Promise(function(resolve, reject) {
      InternalTrainingInfoSchema.find({ studentID: studentID })
        .exec()
        .then(function(data) {
          resolve({ status: 200, internalTrainingData: data });
        })
        .catch(function(err) {
          reject({
            status: 500,
            message: "Error finding internal training information - " + err
          });
        });
    });
  };

  this.addTaskDetails = function(data) {
    return new Promise(function(resolve, reject) {
      var task = new taskDetails({
        monthNo: data.monthNo,
        studentID: data.studentID,
        taskSummary: data.taskSummary,
        detailedDescription: data.detailedDescription,
        remarksAndCretification: data.remarksAndCretification,
        isCertified: data.isCertified
      });

      task
        .save()
        .then(function() {
          resolve({
            status: 200,
            message: "Task details successfully added"
          });
        })
        .catch(function(err) {
          reject({
            status: 500,
            message: "Error adding task details - " + err
          });
        });
    });
  };

  this.getTaskDetails = function(studentID) {
    return new Promise(function(resolve, reject) {
      taskDetails
        .find({ studentID: studentID })
        .exec()
        .then(function(data) {
          resolve({ status: 200, taskDetails: data });
        })
        .catch(function(err) {
          reject({
            status: 500,
            message: "Error finding task details - " + err
          });
        });
    });
  };

  this.updateTaskDetails = function(studentID, data) {
    return new Promise(function(resolve, reject) {
      taskDetails
        .update({ studentID: studentID }, data)
        .then(function() {
          resolve({
            status: 200,
            message: "Task Details Successfully Updated"
          });
        })
        .catch(function(err) {
          reject({
            status: 500,
            message: "Error updating task details - " + err
          });
        });
    });
  };
};

module.exports = new Controller();
