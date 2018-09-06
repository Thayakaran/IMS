const mongoose = require('./DBConnection');

const  Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:String,
    sid:String,
    adrress:String,
    phonum:String,
    email:String,
    title:String,
    specialisation:String,
    periodf:String,
    periodt:String,
    supname:String,
    supdate:String,
    month1:String,
    month2:String,
    month3:String,
    extname:String,
    extdate:String

});

mongoose.model('form3' , UserSchema);
module.exports = mongoose;