const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema

const HotelSchema =  new Schema({
    name:{
        type: String    
    },
    star:{
        type: String
    },
    cost: { 
        type: String
    },
    area : {
        type: String
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    imagepath: {
        type: String
    }
});

mongoose.model('hotels', HotelSchema);