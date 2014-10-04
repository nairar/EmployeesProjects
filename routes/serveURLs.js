var db = require('./connectDB');

var serveLogin = function (req, res) {
    console.log("Hello!");
    res.send("Hello world!");
}

var serveIndex = function (req, res) {
    console.log("Serving index!");
    res.sendfile('/public/BasicEmployeeProject.html', {'root' : '/public'});
}

var serveIndexNumber = function (req, res) {
    console.log(res);
    res.send("Serving indexNumber! " + req.params.id);
}

var serveEmployee = function (req, res) {
    console.log(req.params);
    res.send("Serving indexNumber! " + req.params.id);
}

var serveEmployeePage = function (req, res) {
    res.render('/public/Employees.html', { 'root': '/public' });
}

var serveEmployees = function (req, res) {
    var employees = null;
    db.connection.Emp.find({}).toArray(function (err, docs) {
        console.dir(docs);
        if (docs) {
            res.send({ employees: docs });
            return res.end();
        }
    });

}

exports.serveLogin = serveLogin;
exports.serveIndex = serveIndex;
exports.serveIndexNumber = serveIndexNumber;
exports.serveEmployee = serveEmployee;
exports.serveEmployeePage = serveEmployeePage;
exports.serveEmployees = serveEmployees;