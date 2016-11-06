
// set dependencies
var express = require('express');
var router = express.Router();

// Dependencies
var models  = require('../models');

var newGift;

// define routes
router.get('/gifts', function (req, res) {

	models.Gift.findAll({})
	.then(function(result){
		var giftObj = res.json(result);
		console.log(giftObj);
		res.render('gifts/index', giftObj);
	});
});

router.post('/gifts/create', function (req, res) {
	var gift = req.body; // set request to variable
// create new instance of model gift
	models.Gift.create(
		{
			giftName: gift.name,
			giftIcon: gift.icon
		}
	).then(function(){
		res.redirect('/gifts')
	});
});

// export router
module.exports = router;
