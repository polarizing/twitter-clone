var Express = require('express');
var app = new Express();

app.use(function(req,res,next) {
	console.log("New Request: ", req.path);
	next();
});

app.get('/', function(req,res,next) {
	res.send("Welcome to our twitter clone");
})
app.listen(3003);