var mongo = require("mongojs");
var dbUrl = 'mongodb://localhost:27018/ArunNair'

if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    db_url = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
    process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
    process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
    process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
    process.env.OPENSHIFT_APP_NAME;
}

var connection = mongo.connect('mongodb://'+dbUrl, ['Emp']);

exports.connection = connection;