var express = require('express');
var app = express();
var routes = require('./routes/');

var swig = require('swig');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

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