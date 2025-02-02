"use strict";

const express = require("express");
var Cors = require("cors");
const configs = require("./backend/Configs/configs");
const cors = require("cors");

const route_registgration = require("./backend/Registration/router_registration");
const route_login = require("./backend/Login/router_login");
const route_form1 = require("./backend/Form_1/routes");
const form3_routes = require("./backend/Form_3/routes");
const emailVerificationRoute = require("./backend/EmailVerification/routes");
const route_form5 = require("./backend/Form_5/routes");
const route_form7 = require("./backend/Form_7/routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/frontend", express.static("frontend"));

app.use(route_registgration);
app.use(route_login);
app.use(route_form1);
app.use(form3_routes);
app.use(emailVerificationRoute);
app.use(route_form5);
app.use(route_form7);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(configs.port, function(err) {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Listening on port " + configs.port);
});
