
var express = require('express');
var app = express();
var http = require('http');
var router = require('./routes/serveURLs')

app.set('ipaddress', process.env.OPENSHIFT_NODEJS_IP);

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3030);

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', router.serveLogin);
app.get('/index', router.serveIndex);

app.get('/index/:id', router.serveIndexNumber);
app.get('/index/:employees/:id', router.serveEmployee);

http.createServer(app).listen(app.get('port'), app.get('ipaddress'), function() {
	console.log("Listening on port " + app.get('port'));
});

module.exports = app;

