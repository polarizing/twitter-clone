var express = require('express');
var router = express.Router();

var path = require('path');

var tweetBank = require('../tweetBank');

router.get('/', function(req, res, next) {
	var tweets = tweetBank.list();
	res.render('index', { title: 'Twitter.js', tweets: tweets });
});

var options = {
	root: path.resolve(__dirname, '..')
}

// router.get('/stylesheets/style.css', function(req, res, next) {
// 	res.sendFile('/public/stylesheets/style.css', options);
// })

module.exports = router;

