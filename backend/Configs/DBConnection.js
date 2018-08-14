const mongoose = require('mongoose');
const configs = require('./configs');


mongoose.connect(configs.connectionString, function (err) {
    if (err) {
        console.error(err);
        process.exit(-1);
    }

    console.log('Connected to the DB');
});

module.exports = mongoose;