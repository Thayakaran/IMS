module.exports.connectionString = 'mongodb://IMS_SLIIT:ims123@ds133762.mlab.com:33762/ims_matrix';
module.exports.port = process.env.PORT || 3000;
module.exports.salt = "@FFS1234@";
module.exports.merchant = "10010";
module.exports.key = "password1234";
module.exports.domain = process.env.DOMAIN || "http://localhost:"+this.port;