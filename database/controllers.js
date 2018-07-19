let {Favorites, Users, Friends} = require('./schemas.js')

exports.getUsers = (req, res) => {
  Users.find({}).then(response => res.send(response))
}

exports.saveUser = (req, res) => {
  return new Users ({
    username: req.body.username
  }).save().then(response => res.send('user added'))
}

exports.retrieveUser = (req, res) => {
  let {username} = req.params
  return Users.find({username: username}).then(response => {
    if (response.length === 0) res.sendStatus(404)
    else res.send(response)
  }
)}

exports.retrieveAllMessages = (req, res) => {
  let {username} = req.params
  Favorites.find({username: username}).then(response => {
    if (response.length === 0) res.send('No favorite messages found')
    else res.send(response)
  }
)}

exports.saveMessage = (req, res) => {
  new Favorites ({
    username: req.body.username,
    favoriteMessage: req.body.favoriteMessage,
    fromWho: req.body.fromWho
  }).save().then(response => res.send('favorite message added'))
}

exports.deleteMessage = (req, res) => {
  let {username} = req.params
  Favorites.deleteOne({favoriteMessage: req.body.favoriteMessage}).then(response => res.send('deleted one'))
}

exports.deleteAllMessages = (req, res) => {
  Favorites.remove({}).then(response => res.send('all messages by user deleted'))
}

exports.retrieveFriends = (req, res) => {
  let {username} = req.params
  Friends.find({username: username}).then(response => {
    if (response.length === 0) res.send('no friends added')
    else res.send(response)
  }
)}

exports.saveFriend = (req, res) => {
  console.log(req.body.username);
  console.log(req.body.fromWho);
  new Friends ({
    username: req.body.username,
    friend: req.body.fromWho
  }).save().then(response => res.send('saved friend')).catch((response)=> res.status(400).send('saved friend erorr'));
}

exports.deleteFriend = (req, res) => {
  Friends.deleteOne({friend: req.body.fromWho}).then(response => {
    Favorites.remove({fromWho: req.body.fromWho}).then(response => res.send('deleted friend and all his messages'))
  })
}
