const express = require("express");

var Controller = require("./Controller");

const router = express.Router();

router.get("/form3/InternshipInfo/:id", function(req, res) {
  Controller.getInternshipInfo(req.params.id)
    .then(function(data) {
      res.status(data.status).send({ data: data.internshipInformation });
    })
    .catch(function(err) {
      res.status(err.status).send({ message: err.message });
    });
});

router.post("/form3/InternalTrainingInfo/", function(req, res) {
  Controller.addInternalTrainingInfo(req.body)
    .then(function(data) {
      res.status(data.status).send({ message: data.message });
    })
    .catch(function(err) {
      res.status(err.status).send({ message: err.message });
    });
});

router.get("/form3/InternalTrainingInfo/:id", function(req, res) {
  Controller.getInternalTrainingInfo(req.params.id)
    .then(function(data) {
      res.status(data.status).send({ data: data.internalTrainingData });
    })
    .catch(function(err) {
      res.status(err.status).send({ message: err.message });
    });
});

router.post("/form3/task/", function(req, res) {
  Controller.addTaskDetails(req.body)
    .then(function(data) {
      res.status(data.status).send({ message: data.message });
    })
    .catch(function(err) {
      res.status(err.status).send({ message: err.message });
    });
});

router.get("/form3/tasks/:id", function(req, res) {
  Controller.getTaskDetails(req.params.id)
    .then(function(data) {
      res.status(data.status).send({ data: data.taskDetails });
    })
    .catch(function(err) {
      res.status(err.status).send({ message: err.message });
    });
});

router.put("/form3/tasks/:id", function(req, res) {
  Controller.updateTaskDetails(req.params.id, req.body)
    .then(function(data) {
      res.status(data.status).send({ message: data.message });
    })
    .catch(function(err) {
      res.status(err.status).send({ message: err.message });
    });
});

module.exports = router;
