var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//connection to mangoose
const mongoose = require('mongoose');
var Costume = require('./models/costume');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var teaRouter = require('./routes/tea');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();

//start connection string
const url = 'mongodb+srv://demo:demo@cluster0.ulyvs.mongodb.net/learnMongo?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('Connection to DB succeeded'))
  .catch((err) => console.log(err));

// We can seed the collection if needed on  server start 
async function recreateDB(){ 
  // Delete everything 
  // await Costume.deleteMany(); 
 
  let instance1 = new 
Costume({costume_type:"monkey",  size:'medium', 
cost:2.4}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 
} 
//End  

/*
// app.get('/resource', (req, res)=> {
//   const costume = new Costume({
//     costume_type:"ghost",
//     size:"large",
//     cost:25.4
//   });

//   costume.save()
//     .then((result)=> {
//       res.send(result)
//     })
//     .catch((err)=> {
//     console.log(err)
//     }); 
//  });

*/
let reseed = true; 
if (reseed) { recreateDB();}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tea', teaRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

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