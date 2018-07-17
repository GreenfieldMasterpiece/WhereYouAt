let router = require('express').Router()
let controllers = require('./controllers.js')

router.route('/')
  .post(controllers.saveUser)

router.route('/:username')
  .get(controllers.retrieveUser)
  .delete(controllers.deleteAllMessages)

router.route('/:username/friends')
  .get(controllers.retrieveFriends)
  .post(controllers.saveFriend)
  .delete(controllers.deleteFriend)

router.route('/:username/messages')
  .get(controllers.retrieveAllMessages)
  .post(controllers.saveMessage)
  .delete(controllers.deleteMessage)

module.exports = router
