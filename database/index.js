var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/whereyouat', function(err){
  if(err) console.log(err);
  console.log("connection successful");
});

module.exports = db;
