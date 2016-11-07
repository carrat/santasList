
// set dependencies
var express = require('express');
var router = express.Router();

// Dependencies
var models  = require('../models');



// define routes
router.get('/', function (req, res) {

	var chi =  {nice: "None", naughty: "None"};

	models.Child.findAll({ where: {list_id: 1} 
		
	})
	.then(function(children){
		var niceArr = {niceChildObject: children};
		console.log(niceArr);
		chi = {nice: niceArr};
	})

	.then(function(){
		models.Child.findAll({ where: {list_id: 2} 
		
		})
		.then(function(children){
			var naughtyArr = {naughtyChildObject: children};
			console.log(naughtyArr);
			chi.naughty = naughtyArr;
		})
		.then(function(){	
			console.log(chi);
			res.render('index', chi);
		})	
	})
	
});
// export router
module.exports = router;
