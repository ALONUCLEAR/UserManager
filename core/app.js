var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");

var usersRouter = require('./routes/user');

const hostname = "localhost";
const port = 5555;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', usersRouter);

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


app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

  const mongoDB =
  "mongodb+srv://mongo_user:Aa123456@cluster0.atn0ioc.mongodb.net/";
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "cluster0",
  })
  .then(() => {
    console.log("MongoDB connection open");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: " + err);
  });


module.exports = app;
