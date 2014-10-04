var serveLogin = function (req, res) {
	console.log("Hello!");
	res.send("Hello world!");
}

var serveIndex = function (req, res) {
	console.log("Serving index!");
	res.send('./public/BasicEmployeeProject.html');
}

var serveIndexNumber = function (req, res) {
	console.log(res);
	res.send("Serving indexNumber! " + req.params.id);
}

var serveEmployee = function (req, res) {
	console.log(req.params);
	res.send("Serving indexNumber! " + req.params.id);
}

exports.serveLogin = serveLogin;
exports.serveIndex = serveIndex;
exports.serveIndexNumber = serveIndexNumber;
exports.serveEmployee = serveEmployee;