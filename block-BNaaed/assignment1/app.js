var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
mongoose=require('mongoose');
session=require('express-session');
require('dotenv');
const passport = require('passport');
GitHubStrategy= require('passport-github').Strategy




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { session } = require('passport');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//connect to database
mongoose.connect(' mongodb://127.0.0.1:27017',{useNewUrlParser:true,useUnifiedTopology:true},(e)=>{console.log(e?e:"connected")});



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//session
app.use(session({
  secret:process.env.SECRET,
  reset:false,
  store:new MongoStore({mongooseConnection:mongoose.connection})
}))
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
