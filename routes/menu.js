const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const{ensureAuthenticated} = require('../helpers/auth');
const artgallery = require('../models/Art_gallery');
const shopping = require('../models/Shopping');
const attractions = require('../models/Attractions');

module.exports = router;

//Load  Idea Model
require('../models/Idea');
require('../models/hotels');
require('../models/vouchers');
require('../models/myVouchers');
const vouchers=mongoose.model('products');
const hotels = mongoose.model('hotels');
const Idea = mongoose.model('ideas');
const myVouchers = mongoose.model('myVouchers');
const Restaurant = require('../models/Restaurant.js');
const Cafe = require('../models/Cafe.js');
router.get('/live', ensureAuthenticated, (req, res)=>{
    console.log('inside live')
    hotels.find(function(err, output) {

        // if there is an error retrieving, send the error.
                        // nothing after res.send(err) will execute
        if (err){
            res.send(err);
        }
        console.log('hotelDoc', output);
        res.render("menu/live", {'entries': output});
    });
});

// Add Idea Form
router.get('/add', ensureAuthenticated,(req, res) =>{
    console.log('inside add');
    console.log('output of vouchers::'+res);
    vouchers.find(function(err, output) {

        // if there is an error retrieving, send the error.
                        // nothing after res.send(err) will execute
        if (err){
            res.send(err);
        }
        //console.log('voucherDoc', output);
        res.render('menu/add', {voucher: output} );
    });
   
});

router.get('/myvouchers', ensureAuthenticated,(req, res) =>{
    console.log('inside my vouchers');
    const uid = req.user.id;
    console.log("user id :: "+uid)
    myVouchers.find({uid})
    .sort({date:'desc'})
    .then(op => {
        res.render('menu/myvouchers', {myVouchers: op});
    });
});


//Idea Index Page
router.get('/', ensureAuthenticated, (req, res)=>{
    Idea.find({user:req.user.id})
    .sort({date:'desc'})
    .then(menu => {
        res.render('index',{
            menu:menu
        });
    });
});
// // Add Idea Form
// router.get('/add', ensureAuthenticated,(req, res) =>{
//     res.render('menu/add');
// });

// Edit Idea Form
router.get('/edit/:id',(req, res) =>{
    Idea.findOne({
        _id: req.params.id
    })
    .then(idea => {
        if(idea.user != req.user.id){
            req.flash('error_msg','Not Authorised');
            res.redirect('/menu');
        }else{
            res.render('menu/edit',{
                idea: idea
            });
        }
    });

   });

// Restaurants
router.get('/restaurants',ensureAuthenticated,(req, res) =>{
   
   Restaurant.find(function(err, productLength){
    var popularProducts = [];
    var rowSize = 3;
    for(var i= 0; i <productLength.length; i+=rowSize){
        popularProducts.push(productLength.slice(i, i+rowSize));
    }
    res.render('menu/restaurants',{products: popularProducts  
    });
});
});

//Like
router.put("/restaurants/:id", function (req, res) {
    Restaurant.findById(req.params.id, function (err, theUser) {
        if (err) {
            console.log(err);
        } else {
            theUser.likes += 1;
            theUser.save();
            console.log(theUser.likes);
            res.send({likes: theUser.likes}); //something like this...
        }
    });
});

router.get('/cafe',ensureAuthenticated,(req, res) =>{
   
    Cafe.find(function(err, productLength){
     var popularProducts = [];
     var rowSize = 3;
     for(var i= 0; i <productLength.length; i+=rowSize){
         popularProducts.push(productLength.slice(i, i+rowSize));
     }
     res.render('menu/cafe',{products: popularProducts  
     });
  });
 });

//Cheapeats
   router.get('/cheapeats',ensureAuthenticated,(req, res) =>{
    res.render('menu/cheapeats');

   });

//Attractions
router.get('/attractions', ensureAuthenticated, (req, res) => {
    attractions.find(function (err, productLength) {
        var popularProducts = [];
        var rowSize = 3;
        for (var i = 0; i < productLength.length; i += rowSize) {
            popularProducts.push(productLength.slice(i, i + rowSize));
        }
        res.render('menu/attractions', {
            products: popularProducts
        });
    });
});

//Night Life
router.get('/nightlife',ensureAuthenticated,(req, res) =>{
    res.render('menu/nightlife');

   }); 

//Live
router.get('/live',ensureAuthenticated,(req, res) =>{
    res.render('menu/live');

   }); 
   
//Privacy
router.get('/privacy',  (req, res) => {
    res.render('menu/privacy');

});

//Terms N Use
router.get('/termsofuse',  (req, res) => {
    res.render('menu/termsofuse');

});

// Footer Static Routes
router.get('/advertise', ensureAuthenticated, (req, res) => {
    res.render('menu/advertise');

});

router.get('/freqaskque', (req, res) => {
    res.render('menu/freqaskque');

});

router.get('/contactus', ensureAuthenticated, (req, res) => {
    res.render('menu/contactus');

});
//Calender
router.get('/calender',ensureAuthenticated,(req, res) =>{
    res.render('menu/calender');

   });

//ArtGallery
router.get('/artgallery', ensureAuthenticated, (req, res) => {

    artgallery.find(function (err, productLength) {
        var popularProducts = [];
        var rowSize = 3;
        for (var i = 0; i < productLength.length; i += rowSize) {
            popularProducts.push(productLength.slice(i, i + rowSize));
        }
        res.render('menu/artgallery', {
            products: popularProducts
        });
    });
});

// Footer Ends

//Shopping
router.get('/shopping', ensureAuthenticated, (req, res) => {
    shopping.find(function (err, productLength) {
        var popularProducts = [];
        var rowSize = 3;
        for (var i = 0; i < productLength.length; i += rowSize) {
            popularProducts.push(productLength.slice(i, i + rowSize));
        }
        res.render('menu/shopping', {
            products: popularProducts
        });
    });
});
//Attractions
router.get('/attractions', ensureAuthenticated, (req, res) => {
    attractions.find(function (err, productLength) {
        var popularProducts = [];
        var rowSize = 3;
        for (var i = 0; i < productLength.length; i += rowSize) {
            popularProducts.push(productLength.slice(i, i + rowSize));
        }
        res.render('menu/attractions', {
            products: popularProducts
        });
    });
});

//Process Form a Post Request form Form Submit
router.post('/', ensureAuthenticated, (req, res) =>{

    console.log(req.body);// It will console submitted idea title and details

    let errors = [];
    if(!req.body.title){
        errors.push({text:'Please add a title'});
    }
    if(!req.body.details){
        errors.push({text:'Please add some details'});
    }
    if(errors.length > 0){
        res.render('menu/add',{
            errors: errors,
            title: req.body.title,
            details: req.body.details
        });
    }else{
        //Storing the submitted form to MongoDB
        const newUser = {
            title: req.body.title,
            details: req.body.details,
            user: req.user.id
        }
        new Idea(newUser)
        .save()
        .then(idea =>{
            req.flash('success_msg', 'A Video idea Added');
            res.redirect('/menu');
        });
    }
}); 

//Edit Form Process
router.put('/:id', ensureAuthenticated, (req, res)=>{
    Idea.findOne({
        _id: req.params.id
    })
    .then(idea =>{
        //new values
        idea.title = req.body.title;
        idea.details = req.body.details;
        idea.save()
        .then(idea => {
            req.flash('success_msg', 'Video idea Updated')
            res.redirect('/menu');
        })
    });

});


//Delete Idea
router.delete('/:id', ensureAuthenticated, (req, res)=>{

    Idea.remove({_id: req.params.id})
    .then(() =>{
      
        req.flash('success_msg', 'Video idea removed');
        res.redirect('/menu');
    });

});
