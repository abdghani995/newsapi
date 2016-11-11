var mongoose = require('mongoose');

var rawNews = mongoose.Schema({
    source: { type: String, required: true },    
    author: { type: String, required: true },   
    title: { type: String, required: true },   
    description: { type: String, required: true },   
    source: { type: String, required: true },   
    url: { type: String, required: true },   
    urlToImage: { type: String, required: true },  
    publishedAt : {type:Date,required:true},
    status : { type: String, required: true } 
});

var rawnews = mongoose.model('rawnews', rawNews);

module.exports = rawnews