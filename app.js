//ES6 so we are using const
//To import any module we use require tag
const express = require('express');
//For accessing local css, js and images
const path = require('path');
// importing handlebars
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');

const passport = require('passport');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
// It initialize our application 
const app = express(); 
const nodemailer = require('nodemailer');// added for email 


//Load User Routes
const vouchers = require('./routes/voucher');
//Load Manu Routes
const menu = require('./routes/menu');

//Load User Routes
const users = require('./routes/users');

//Passport Config
require('./config/passport')(passport);

//DB Config
const db = require('./config/database');

//Map global promise - get rid of warning
mongoose.Promise = global.Promise;
//Connect to Mongoose 
mongoose.connect(db.mongoURI, {useNewUrlParser: true })
.then(()=> console.log('NYG MongoDB Connected'))
.catch(err => console.log(err));




//Every import has its middleware
//Handlebar Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars'); 
// layout => wrap arount other views, common elements we put on main page and use it everywhere

//Body parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Static FOlder
app.use(express.static(path.join(__dirname, "public")));


//Use users routes

//Method override middleware
//Using PUT Request without using ajax request
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//Express Session middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    
  }));

  //Passport Middleware
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(flash());


  //Global Variables
  app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user = req.user || null;
    next(); // to call next piece of middleware
  });


//How Middleware Works
app.use(function(req, res, next){
    console.log(Date.now());
    req.name = 'Shivesh Kumar';
    next();
});
//Index Route
//get() for handaling a get request - going to webpage
//post() used  to update something server, database
//put() update any resource which is already at the server
//delete() to delete any resource

app.get('/',(req, res)=>{
    const title = 'Welcome1';
    res.render('index',{
        title: title
    }); //It send this to browser
});

app.get('/about',(req, res)=>{
    res.render('about');
});

app.post('/send', (req, res) => {
    console.log(req.body);
    const output = `
    <p> You have a new contact request from a customer.</p>
    <h3>Contact Details</h3>
    <ul>
        <li>First Name: ${req.body.firstName}</li>
        <li>Last Name: ${req.body.lastName}</li>
        <li>Phone Number: ${req.body.phoneNumber}</li>
        <li>Email Id: ${req.body.emailId}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.comments}</p>
    `;
    const output_sender = `
    <p> Hello! Thanks for contacting New York Guide. We will be in Touch Soon</p>

    <h3> Your Message:</h3>
    <p>${req.body.comments}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'mynewyorkguide@gmail.com',
          pass: 'newyorkguide'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        
        from: 'mynewyorkguide@gmail.com', // sender address
        to:  req.body.emailId, // list of receivers
        subject: 'Thanks for contacting Newyork Guide', // Subject line
        html:output_sender
    };

    let mailNYG = {
        
        from: 'mynewyorkguide@gmail.com', // sender address
        to:  'mynewyorkguide@gmail.com', // list of receivers
        subject: 'New Contact Request', // Subject line
        html:output
    };

    // send mail with defined transport object
    transporter.sendMail(mailNYG, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
           
    });

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        req.flash('success_msg', 'Please Check Your Mail, We Will Be In Touch Soon !');
        res.redirect('/users/thankyou');
       
    });

    

});
   
// Use Menu routes
app.use('/menu', menu);

//Use users routes
app.use('/users', users);
app.use('/voucher', vouchers);

const port = process.env.PORT || 7001;
app.listen(port, ()=>{
    // back tick `` called a template string, it allows to include variables without concatinate 
    console.log(` Server started on port ${port}`); // equivalent to console.lo g(' Server started on port' + port)
     
});