//const mongoose = require('../Configs/DBSchema_employee');
const mongoose = require('../Configs/DBSchema_employee');
const configs = require('../Configs/configs');
//const bcrypt = require('bcrypt');
const crypto = require('crypto');
const request = require('request');
const UserSchema = mongoose.model('user');



module.exports.signup = function (user, callback) {
    if (!this.validateEmail(user.email)){
        callback("Invalid Email");
        return;
    }
    var email = user.email;
    UserSchema.find({email:email}).exec().then(function (doc) {
        if (doc.length < 1){
            var pass = hash(user.password + configs.salt);
            var newUser = new UserSchema({
                type:user.type,
                name:user.name,
                email:user.email,
                password:pass

            });
            newUser.save(function (err, doc) {
                callback(err, true);
            });
        }
        else{
            callback("User with the email already exists", false);
        }

    }).catch(function (err) {
        console.log(err);
        callback("Unknown Error", false);
    })
}

function hash(word) {
    return crypto.createHash('sha256').update(word.toString()).digest('base64').toString();
}

module.exports.validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};