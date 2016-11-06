
// set dependencies
var express = require('express');
var router = express.Router();

// Dependencies
var models  = require('../models');

// define routes
router.get('/', function (req, res) {

	models.Child.findAll({})
	.then(function(children){
		var childObj = res.json(children);
		console.log(childObj);
		res.render('index', childObj);
	});
});
// export router
module.exports = router;
