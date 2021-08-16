const router = require('express').Router();

const userController = require('./controller/user');

//finding issue connecting frontend to backend post.
//need to do**
router.use( function timeLog(req, res, next) {
  console.log('Time: ', Date.now()),
  next();
})
router.get('/', userController.get);
router.post('/', userController.create);

module.exports = router;
