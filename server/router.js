const router = require('express').Router();

const userController = require('./controller/createUser');

//finding issue connecting frontend to backend post.
//need to do**
router.use( function timeLog(req, res, next) {
  console.log('Time: ', Date.now()),
  next();
})
router.get('/user', userController.get);
router.post('/user', (req, res) => {
  console.log('inside post', req.body);
  res.send('post in router');
})
// router.post('/user', userController.create);

module.exports = router;
