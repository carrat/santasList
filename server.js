// Set dependencies
var express 	= require('express');
var methodOverride	= require('method-override');
var bodyParser 	= require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');

// define controllers
var application_controller = require('./controllers/application_controller.js');
var children_controller = require('./controllers/children_controller.js');
var gifts_controller = require('./controllers/gifts_controller.js')


// we bring in the models we exported with index.js
var models = require("./models");

var app = express();

// target static files
app.use('/static', express.static(__dirname + '/public/assets/'));

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use('/', application_controller);
app.use('/children', children_controller);
app.use('/gifts', gifts_controller);



// we set the port of the app
app.set('port', process.env.PORT || 3000);


// we sync the models with our db 
// (thus creating the apropos tables)
models.sequelize.sync().then(function () {
	// set our app to listen to the port we set above
  var server = app.listen(app.get('port'), function() {
  	// then save a log of the listening to our debugger.
    console.log('Express server listening on port ' + server.address().port);
  });
});

