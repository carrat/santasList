// include orm file
var orm = require('../config/orm.js');

//define listmaker model
var listmaker = {
	selectAll: function (cb) {
		orm.selectAll(function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	insertOne: function (childName, cb) {
		orm.insertOne(childName, function (res) {
			cb(res);
		});
	},
	naughtyOne: function (childID, cb) {
		orm.naughtyOne(childID, function (res) {
			cb(res);
		});
	},
	niceOne: function (childID, cb) {
		orm.niceOne(childID, function (res) {
			cb(res);
		});
	},
	deleteOne: function (childID, cb){
		orm.deleteOne(childID, function (res) {
			cb(res);
		});
	}

};

//export listmaker model
module.exports = listmaker;
