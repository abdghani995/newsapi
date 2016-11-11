var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require(path.join(__dirname,'global','appConfig'))



var app = express();

// view engine setup

app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
var mongoose = require('mongoose');
var db = mongoose.connect(config.mongooseUrl)
function removeCors(req,res,next){
	    res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
	    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
	    next()
}
app.use(removeCors)
app.use('/rawnews', require('./routes/rawnews/newsapi'));
app.use('/rawnews/channel', require('./routes/rawnews/channel.js'));
app.use('*',function(req,res,next){
	res.send("Sorry Invalid Api");
})




module.exports = app;
