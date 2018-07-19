let router = require('express').Router();
let controllers = require('./controllers');

router.route('/')
.post(controllers.joinRandom)
.get(controllers.getCenter);

// router.route('/join')
// .post(controllers.joinRoom);

router.route('/leave')
.post(controllers.disconnect);

module.exports = router;