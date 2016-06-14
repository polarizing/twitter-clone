var express = require('express');
var app = express();
var routes = require('./routes/');
var bodyParser = require('body-parser');

var swig = require('swig');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

// parse application/json and application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
	console.log(req.method, req.path, res.statusCode);
	next();
});

app.use('/', routes);
app.use(express.static('public'));


// ERROR HANDLING
app.use(function(err, req, res, next) {
	if (err) console.error('Caught an error', err);
	res.end();
});

app.listen(3005);