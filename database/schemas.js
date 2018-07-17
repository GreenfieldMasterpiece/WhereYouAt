let mongoose = require('mongoose');
let db = require('./index.js');

let userFavsSchema = mongoose.Schema({
  username: String,
  favoriteMessage: String,
  fromWho: String,
  time : { type : Date, default: Date.now }
})

let usersSchema = mongoose.Schema({
  username: {type: String, unique: true},
})

let Favorites = db.model('Favorites', userFavsSchema)
let Users = db.model('Users', usersSchema)


module.exports = {'Favorites': Favorites, 'Users': Users}
