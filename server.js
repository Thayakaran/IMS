'use strict';

const express = require('express');
var Cors		= require('cors');
const configs = require('./backend/Configs/configs');
const cors = require('cors');

const route_test = require('./backend/Testing_MGMT/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('dist'));
app.use(express.static(__dirname));

app.use('/' , route_test);

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(configs.port, function (err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Listening on port '+configs.port);
});