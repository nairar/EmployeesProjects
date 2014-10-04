var mongo = require("mongojs");
var ObjectId = require("mongojs").ObjectId;

/*var db_url = 'localhost:27018/';*/
    var db_url = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
    process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
    process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
    process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
    process.env.OPENSHIFT_APP_NAME;

/*var connection = mongo("mongodb://" + db_url + "ArunNair", ['Emp']);*/
    var connection = mongo(db_url, ['Emp']);

exports.connection = connection;
exports.ObjectId = ObjectId;