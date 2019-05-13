var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var schema = new Schema({	 
	imagepath: {
		type: String,
		required:true
	},
	imagelink: {
		type: String,
		required:true
	},
	title: {
		type: String,
		required:true
	},
	description: {
		type: String,
		required:true
	},

});	
module.exports = mongoose.model("Shopping", schema);