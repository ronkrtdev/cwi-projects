var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Require the Route's JS Files
var routes = require('./routes/index'); // http://crypto-with.in/*
var user = require('./routes/user'); // http://crypto-with.in/user/*
var paperwallet = require('./routes/paperwallet'); // http://crypto-with.in/paperwallet/*
var faucet = require('./routes/faucet'); // http://crypto-with.in/faucet/*
var dice = require('./routes/dice'); // http://crypto-with.in/dice/*
var wheel = require('./routes/wheel'); // http://crypto-with.in/wheel/*
var admin = require('./routes/admin'); // http://crypto-with.in/admin/*

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Tell NodeJS how to do what the required routes do.
app.use('/', routes); // http://crypto-with.in/
app.use('/user', user); // http://crypto-with.in/user/*
app.use('/paperwallet', paperwallet); // http://crypto-with.in/paperwallet/*
app.use('/faucet', faucet); // http://crypto-with.in/faucet/*
app.use('/dice', dice); // http://crypto-with.in/dice/*
app.use('/wheel', wheel); // http://crypto-with.in/wheel/*
app.use('/admin', admin); // http://crypto-with.in/admin/*

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
