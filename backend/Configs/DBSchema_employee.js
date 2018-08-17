const mongoose = require('./DBConnection');

const  Schema = mongoose.Schema;

const UserSchema = new Schema({
    type:String,
    name:String,
    email:String,
    password:String


});

mongoose.model('user' , UserSchema);
module.exports = mongoose;