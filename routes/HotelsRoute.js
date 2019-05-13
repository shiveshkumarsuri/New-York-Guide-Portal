//Load User Model
const express = require('express');
const mongoose = require('mongoose');
require('../models/vouchers');
require('../models/myVouchers');
const router = express.Router();
const paypal = require ('paypal-rest-sdk');
const querystring = require('querystring');
module.exports =  router;


const vouchers=mongoose.model('products');
const myVouchers = mongoose.model('myVouchers');


router.get('/', function(req, res) {
    console.log('in here');
    vouchers.find().toArray({},{},function(err, output) {
        // if there is an error retrieving, send the error.
                        // nothing after res.send(err) will execute
        if (err){
            res.send(err);
        }
        //console.log('products', output);
        res.render("/", {"/menu/add" : output});
    });
});

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AQHJqeroA4CDn-oarRMbwxTN_3K3ujf3pYogRMjZuwL0CsS7wwisB6wLchZ4T01494BXwTNGPVTJQH0B',
    'client_secret': 'EG42fb9fsj_fJQR1uE46K5zg_DK7TuIUpCufqmSZBFFH_3pt3mljNYA5aRZI7F3VztfdqX22ntJytfCx'
  });

  router.get('/success', (req, res)=>{
   const payerId=req.query.PayerID;
   const paymentId=req.query.paymentId;

   const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": finalamount
        }
    }]


  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
       // var a = payment;
       /// var myop=JSON.parse(a);
        var name = payment.transactions[0].item_list.items[0].name;
        var pid  = payment.transactions[0].item_list.items[0].sku;
        var quantity = payment.transactions[0].item_list.items[0].quantity;       
        var totalPrice = payment.transactions[0].amount.total;
       
        console.log("responsse name is ::"+totalPrice);
        if(error){
            throw error;
        }else{
            //Storing the submitted form to MongoDB
            var newVoucher = new myVouchers( {
                vouchername: name,
                price: totalPrice,
                description : "Trails",
                uid: uid
            });

            newVoucher.save(function(err,n){
                if (err){
                    console.log("ERROR :"+err);
                    console.log('saving failed');
                }
                console.log('saved '+ n.message);
                req.flash('success_msg', 'Transaction successful');
                res.redirect("../menu/myvouchers");
            });

            // new myVouchers(newVoucher).save()
            // .then(idea =>{
            //     req.flash('success_msg', 'Transaction successful');
            //     res.redirect("../menu/myvouchers");
            //     console.log("successfully added");
            // });
        }
    }

});

});

router.get('/cancel', (req, res) => res.send('Cancelled'));

let finalamount;
let uid;
router.post('/pay/:id/',(req,res)=>{
    
    let id=req.params.id;
    uid= req.user.id;
    console.log("user id is :::"+uid);
    let price ;
 
    let description;
    let quantity;
    let name;
    
    const mongo = require('mongodb');
    var o_id = new mongo.ObjectID(id);

   vouchers.find(o_id,function(err, output) {

    // if there is an error retrieving, send the error.
                    // nothing after res.send(err) will execute
    if (err){
        res.send(err);
    }

    name = output[0]["vouchername"];
    price = output[0]["price"];
    quantity=req.body.quantity;
    let a= price;
    let b= parseInt(quantity);
    let num =Number(a)*Number(b);
    finalamount= parseFloat(num);
    description= output[0]["description"];

    create_payment_json = {
     
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"        
    },
    "redirect_urls": {
        "return_url": "http://localhost:7001/voucher/success",
        "cancel_url": "http://localhost:7001/voucher/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": name,
                "sku": id,
                "price": price,
                "currency": "USD",
                "quantity": quantity
            }]
        },
        "amount": {
            "total":finalamount,
            "currency": "USD"            
        },
        "description": description
    }]
};


    paypal.payment.create(create_payment_json, function (error, payment) {
        
        if (error) {
            console.log("error is"+JSON.stringify(error.response));
            
            throw error;
        } else {
            console.log("Create Payment Response");
            //console.log(payment);
            for(let i=0; i< payment.links.length;i++){
                if(payment.links[i].rel == 'approval_url'){
                    res.redirect(payment.links[i].href);
                }
            }
        }
    });
});
});