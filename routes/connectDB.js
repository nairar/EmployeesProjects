var mongo = require("mongojs");
var dbUrl = 'mongodb://localhost:27018/ArunNair'
var connection = mongo.connect(dbUrl, ['Emp']);
exports.connection = connection;