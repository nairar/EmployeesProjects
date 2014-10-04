var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

var router = require('./routes/serveURLs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
extended: true}));
app.use(bodyParser.json());

app.set('ipaddress', process.env.OPENSHIFT_NODEJS_IP);

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3050);

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");
  next();
 });

var alice = {first: "Alice", last: "Wonderland"};
var bob = {first: "Bob", last: "Marley"};
var charlie = {first: "Charlie", last: "Garcia"};
bob.projects = [{project: "Facebook"}];
var employees = [alice, bob, charlie];

app.get("/env", function (req, res) {
    res.send(process.env);

});

app.get('/', router.serveIndex);

app.get("/EmployeePage", router.serveEmployeePage);

app.get("/getEmployees", router.serveEmployees);

app.get("/employees", function (req, res) {
    res.send(employees);

});

app.get("/editEmployees", router.serveEditEmployees);
app.post("/update", router.serveUpdateEmployee);
app.post("/add", router.serveAddEmployee);
app.post("/delete", router.serveDeleteEmployee);

app.get("/employees/:index", function(req, res) {
	var index = req.params.index;
	res.send(employees[index]);
});

app.get("/employees/:index/projects", function(req, res) {
	var index = req.params.index;
	res.send(employees[index].projects);
});


http.createServer(app).listen(app.get('port'), app.get('ipaddress'), function() {
	console.log("Listening on port " + app.get('port'));
});

module.exports = app;
