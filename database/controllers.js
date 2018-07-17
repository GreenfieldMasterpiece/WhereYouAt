let {Favorites, Users} = require('./schemas.js')

exports.saveUser = (req, res) => {
  return new Users ({
    username: req.body.username
  }).save().then(response => res.send('user added'))
}

exports.retrieveUser = (req, res) => {
  let {username} = req.params
  return Users.find({username: username}).then(response => res.send(response))
}

exports.retrieveAllMessages = (req, res) => {
  let {username} = req.params
  Favorites.find({username: username}).then(response => res.send(response))
}

exports.saveMessage = (req, res) => {
  console.log(req.body)
  new Favorites ({
    username: req.body.username,
    favoriteMessage: req.body.favoriteMessage,
    fromWho: req.body.fromWho
  }).save().then(response => res.send('favorite message added'))
}

exports.deleteMessage = (req, res) => {
  console.log(req.body)
  let {username} = req.params
  Favorites.deleteOne({favoriteMessage: req.body.favoriteMessage}).then(response => res.send('deleted one'))
}
