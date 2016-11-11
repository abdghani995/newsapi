var path = require('path');
var rawnews = require(path.join(__dirname,'..','models','rawNews'))

exports.getChannelNews = function(req,res,next){
  var query = {'status':'unprocessed','source':req.params.source};
  var filter = {
    'author':1,
    'title':1,
    'description':1,
    'url':1,
    'urlToImage':1,
    'publishedAt':1,
    'source':1,
    _id:0
  }
  var sort = {'publishedAt':-1}
  rawnews.find(query).select(filter).sort(sort).exec(rawNewsCallback)
  function rawNewsCallback(err,data){
    if(err){
      return next(err)
    }
    res.send(data);
    // return next();
  }
}

exports.getRawNewsLimit = function(req, res, next) {

  var query = {'status':'unprocessed',source:req.params.source};
  var filter = {
    'author':1,
    'title':1,
    'description':1,
    'url':1,
    'urlToImage':1,
    'publishedAt':1,
    'source':1,
    _id:0
  }
  var sort = {'publishedAt':-1}
  rawnews
  .find(query)
  .select(filter)
  .sort(sort)
  .limit(parseInt(req.params.limit))
  .exec(rawNewsCallback)
  function rawNewsCallback(err,data){
    if(err){
      return next(err)
    }

    res.send(data);
   
  }
}

exports.getRawNewsSkipLimit = function(req, res, next) {
  var query = {'status':'unprocessed',source:req.params.source};
  var filter = {
    'author':1,
    'title':1,
    'description':1,
    'url':1,
    'urlToImage':1,
    'publishedAt':1,
    'source':1,
    _id:0
  }
  var sort = {'publishedAt':-1}
  rawnews
  .find(query)
  .select(filter)
  .sort(sort)
  .skip(parseInt(req.params.skip))
  .limit(parseInt(req.params.limit))
  .exec(rawNewsCallback)
  function rawNewsCallback(err,data){
    if(err){
      return next(err)
    }
    res.send(data);
  }
}
