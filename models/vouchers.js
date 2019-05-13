const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema

const VoucherSchema =  new Schema({
    vouchername:{
        type: String    
    },
    price:{
        type: String
    },
    description: { 
        type: String
    }
});

mongoose.model('products', VoucherSchema);