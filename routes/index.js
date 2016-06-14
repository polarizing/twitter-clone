var express = require('express');
var router = express.Router();

var path = require('path');

var tweetBank = require('../tweetBank');

router.get('/', function(req, res, next) {
	var tweets = tweetBank.list();
	res.render('index', { title: 'Twitter.js', tweets: tweets , showForm: true});
});

router.get('/users/:name', function(req, res, next) {
	var name = req.params.name;
	var list = tweetBank.find({name: name});
	res.render('index', {title: 'Twitter.js - Posts by '+name, tweets: list, showForm: true, name: name})
})

router.post('/tweets', function(req, res, next) {
	var name = req.body.name;
	var text = req.body.text;
	tweetBank.add(name, text);
	res.redirect('/');
});

module.exports = router;

