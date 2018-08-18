const mongoose = require('../Configs/DBSchema_employee');
const configs = require('../Configs/configs');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const request = require('request');
const UserSchema = mongoose.model('user');




module.exports.login = function (user, callback) {
    var pass  = hash(user.password+configs.salt);

    UserSchema.find({type:user.type ,email:user.email, password:pass }).exec().then(function (doc) {
        if (doc.length < 1){
            callback("Invalid User");
        }

        else {
            console.log(doc[0].name);
            var token = hash(Date.now().toString() + doc._id);
            doc[0].sessions.push(token);
            doc[0].save();
            callback(null, {token:token, name:doc[0].name});
        }
    }).catch(function (err) {
        console.log(err);
        callback(err);
    });

    //Reutnrs SHA256 hash for specified string
    function hash(word) {
        return crypto.createHash('sha256').update(word.toString()).digest('base64').toString();
    }

//Validates token.
    module.exports.validateToken = function (token, callback) {
        UserSchema.find({sessions:token}).exec().then(function (doc) {
            if (doc.length > 0){
                callback(null, true);
            }
            else{
                callback("Error validating token", false);
            }
        }).catch(function (err) {
            callback(err);
        })
    }
}