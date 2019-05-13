
var mongoose = require('mongoose');
require('../models/vouchers');
//DB Config
const db = require('../config/database');
const products = mongoose.model('products');
mongoose.connect(db.mongoURI, { useNewUrlParser: true });

var products_list = [
  new products({
    
    vouchername: "Supersaver voucher ",
    price: "100",
    description: "This voucher is worth $100. You can spend in attractions across the city - WTC, Staten Island, 9/11 Museum, Statue of Liberty, Central park",
  }),
  new products({
    
    vouchername: "Ultimate new york voucher",
    price: "150",
    description: "This voucher is worth $150. You can spend in attractions across the city - WTC, Staten Island, 9/11 Museum, Statue of Liberty, Central park",

  }),
  new products({
    
    vouchername: "Luxury new york trip",
    price: "200",
    description: "This voucher is worth $200. You can spend in attractions across the city - WTC, Staten Island, 9/11 Museum, Statue of Liberty, Central park",
  }),
  new products({
    
    vouchername: "Ultra luxury new york trip",
    price: "500",
    description: "This voucher is worth $500. You can spend in attractions across the city - WTC, Staten Island, 9/11 Museum, Statue of Liberty, Central park",
  })

];

var a = 0;
for (var i = 0; i < products_list.length; i++) {
  products_list[i].save(function (err, n) {
    a++;
    if (err) {
      console.log(err);
    }
    if (a === products_list.length) {
      exit();
    }
  });

}


function exit() {
  mongoose.disconnect();
}

