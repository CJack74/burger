const orm = require("../config/orm.js");

// this orm that will interact with the database
const burger = {
	all: function (cb) {
		orm.selectAll("burgers", function (res) {
			cb(res);
		});
	},
	// cols and values are arrays
	create: function (cols, vals, cb){
		orm.insertOne("burgers", cols, vals, function(res){
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.updateOne("burgers", objColVals, condition, function (res){
			cb(res);
		})
	}
}

module.exports = burger;