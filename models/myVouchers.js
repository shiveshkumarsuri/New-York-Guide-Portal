const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema

const myVoucherSchema =  new Schema({
    
    vouchername:{
        type: String    
    },
    price:{
        type: String
    },
    description: { 
        type: String
    },
    uid :{
        type : String
    },
    date:{
        type: Date,
        default: Date.now
    }
});

mongoose.model('myVouchers', myVoucherSchema);