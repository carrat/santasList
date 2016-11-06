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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  })
});


// our module get's exported as app.
module.exports = app;
