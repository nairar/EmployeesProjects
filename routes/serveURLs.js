var db = require('./connectDB');

var serveLogin = function (req, res) {
    console.log("Hello!");
    res.send("Hello world!");
}

var serveIndex = function (req, res) {
    console.log("Serving index!");
    res.sendfile('./public/BasicEmployeeProject.html');
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
    res.sendfile('./public/Employees.html');
}


var serveEmployees = function (req, res) {
    
    db.connection.Emp.find({}).toArray(function (err, docs) {
        if (err) { console.log(err); db.connection.close(); }
        console.dir("Documents received " + docs);
        if (docs) {
            res.send({ employees: docs });        
            return res.end();
        }
    });

}

var serveEditEmployees = function (req, res) {
    res.sendfile('./public/EditEmployees.html')
}

var serveUpdateEmployee = function (req, res) {
    
    console.log(JSON.stringify(req.body._id));
    db.connection.Emp.update({_id: db.ObjectId(req.body._id)}, {"name": req.body.name, "empId": req.body.empId, "hobby": 
req.body.hobby}, function(err, docs) {
        console.log("After  update: " + docs);
        findAll(req, res);
    });

    /*db.connection.Emp.find({}).toArray(function (err, docs) {
        if (err) { console.log(err); db.connection.close(); }
        console.dir("Documents received " + docs);
        if (docs) {
            res.send({ employees: docs });
            return res.end();
        }
    });*/


}

var serveAddEmployee = function (req, res) {
    var emp = req.body;
    console.log("New employee adding: " + JSON.stringify(emp));
    db.connection.Emp.save(req.body, function (err, docs) {
        if (err) {
            console.log(err);
            db.connection.close();
        }
        findAll(req, res);
        
    });

    
}

var serveDeleteEmployee = function (req, res) {
    var empId = req.body._id;
    db.connection.Emp.remove({ _id: db.ObjectId(empId) }, function (err, docs) {
        if (err) {
            db.connection.close(); return res.end();
        }
        console.log("Deleted and now searching ");
        findAll(req, res);
    });
    
}

var findAll = function (req, res) {
    db.connection.Emp.find({}).toArray(function (err, docs) {
        if (err) { console.log(err); db.connection.close(); }
        console.dir("Documents received " + docs);
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
exports.serveEditEmployees = serveEditEmployees;
exports.serveUpdateEmployee = serveUpdateEmployee;
exports.serveDeleteEmployee = serveDeleteEmployee;
exports.serveAddEmployee = serveAddEmployee;