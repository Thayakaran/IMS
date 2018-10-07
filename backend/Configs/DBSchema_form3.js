const mongoose = require("./DBConnection");

const Schema = mongoose.Schema;

const form3InternalTrainingInfoSchema = new Schema({
  studentID: String,
  trainingParty: String,
  trainingDescription: String,
  dateFrom: String,
  dateTo: String
});

const form3TaskDetails = new Schema({
  monthNo: Number,
  studentID: String,
  taskSummary: String,
  detailedDescription: String,
  remarksAndCretification: String,
  isCertified: Boolean
});

mongoose.model(
  "form3InternalTrainingInfoSchema",
  form3InternalTrainingInfoSchema
);

mongoose.model("form3TaskDetails", form3TaskDetails);
module.exports = mongoose;
