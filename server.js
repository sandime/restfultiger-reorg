//server.js

// BASE SETUP
// ======================================
// CALL THE PACKAGES --------------------
var express    = require('express'); // call express
var app        = express(); // define our app using express
var bodyParser = require('body-parser'); // get body-parser
var morgan     = require('morgan'); // used to see requests
var mongoose   = require('mongoose'); // for working w/ our database
var User       = require('./user');
//adding config.js
var config = require('/config');
//adding path
var path = require('path');
//secret for creating tokens
// moved to configvar bigSecret = 'beezerthecatthewonderfulwonderfulcat';


// APP CONFIGURATION ---------------------
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// configure our app to handle CORS requests
app.use(function(req, res, next)
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \
Authorization');
    next();
});
// log all requests to the console
app.use(morgan('dev'));

//connect the mongoose
// moved to config: mongoose.connect ('mongodb://tigerapp:roaring1141@ds049171.mongolab.com:49171/tigerapp');
mongoose.connect(config.database);
//end of connect

//set static files location
//used for requests that our front end will make
app.use(express.static(__dirname + '/public'));
//ROUTES FOR OUR API

var apiRoutes = require('./app/routes/api') (app, express);
app.use('/api', apiRoutes);

//MAIN CATCHALL ROUTE SEND USERS TO FRONT END
//HAS TO BE REGISTERED AFTER API ROUTES
app.get('*', function (req,res){
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));

});
app.listen(config.port);
console.log ('magical port ' + config.port);
