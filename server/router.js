const router = require('express').Router();

const userController = require('./controller/user');

// finding issue connecting frontend to backend post.
// need to do**
router.use((req, res, next) => {
  console.log('Time: ', Date.now()),
  next();
});
router.post('/login', userController.get);
router.post('/', userController.create);

module.exports = router;
