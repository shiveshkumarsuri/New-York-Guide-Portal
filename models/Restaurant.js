const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const schema = new Schema({	 
	imagepath: {
		type: String,
		required:true
	},
	restaurantURL: {
		type: String,
		required:true
	},
	title: {
		type: String,
		required:true
	},
	likes:{
		type: Number,
		required: false,
	},
	description: {
		type: String,
		required:true
	},

});	
module.exports = mongoose.model("Restaurant", schema);