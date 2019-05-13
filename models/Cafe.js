const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const schema = new Schema({	 
	imagepath: {
		type: String,
		required:true
	},
	cafeURL: {
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
module.exports = mongoose.model("Cafe", schema);