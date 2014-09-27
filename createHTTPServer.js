var http = require('http');
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 2992);

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


var server = app.listen(app.get('port'), function() {
	console.log("Listening on port " + server.address().port);
});

module.exports = app;