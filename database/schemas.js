let mongoose = require('mongoose');
let db = require('./index.js');

let userFavsSchema = mongoose.Schema({
  username: String,
  favoriteMessage: {type: String, required: true},
  fromWho: String,
  time : { type : Date, default: Date.now }
})

let usersSchema = mongoose.Schema({
  username: {type: String, unique: true, required: true},
})

let friendSchema = mongoose.Schema({
  username: {type: String, unique: false},
  friend: {type: String, _id: false}
})

let Favorites = db.model('Favorites', userFavsSchema)
let Users = db.model('Users', usersSchema)
let Friends = db.model('Friends', friendSchema)


module.exports = {'Favorites': Favorites, 'Users': Users, 'Friends': Friends}
