const mongoose = require('../Configs/DBSchema_form3');
const configs = require('../Configs/configs');
const From3Schema = mongoose.model('form3');


var Controller = function(){
    this.AddForm3Details = function(data){
        return new Promise(function (resolve,reject) {
            var Form3 = new From3Schema ({
                
                name:data.name,
                sid:data.sid,
                adrress:data.adrress,
                phonum:data.phonum,
                email:data.email,
                title:data.title,
                specialisation:data.specialisation,
                periodf:data.periodf,
                periodt:data.periodt,
                supname:data.supname,
                supdate:data.supdate,
                month1:data.month1,
                month2:data.month2,
                month3:data.month3,
                extname:data.extname,
                extdate:data.extdate 
                
            });
            Form3.save().then(function () {
                resolve({status:200,message:"Form3 Details Insert successfully"});
            }).catch(function (err) {
                reject({status:500, message: "Form3 Details Insert :" + err});
            })

        })
    }

    this.GetForm3Details =function (sid) {
        return new Promise(function (resolve, reject) {
            From3Schema.find({sid:sid}).exec().then(function (data) {
                resolve({status:200,studentdetails : data});
            }).catch(function (reason) {
                reject({status:404 ,message:"Error" + reason});
            })
        })
    }

    
    
    this.UpdateForm3Details = function (sid, data) {
        return new Promise(function (resolve,reject) {
            From3Schema.update({sid : sid}, data).then(function (data) {
                resolve({status:200,message:"update successfully"});
            }).catch(function (err) {
                reject({status:500, message: "Faild :" + err});
            })
        })
    
    }
}



    module.exports = new Controller();