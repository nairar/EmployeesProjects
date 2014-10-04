var http = require('http');
var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

app.set('ipaddress', process.env.OPENSHIFT_NODEJS_IP);

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3050);

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

var alice = {first: "Alice", last: "Wonderland"};
var bob = {first: "Bob", last: "Marley"};
var charlie = {first: "Charlie", last: "Garcia"};
bob.projects = [{project: "Facebook"}];
var employees = [alice, bob, charlie];


app.get("/hello", function(req, res) {
	res.send("Hello world!");
});


app.get("/employees", function(req, res) {
	res.send(employees);

});


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
