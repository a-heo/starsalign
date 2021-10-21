const router = require('express').Router();

const userController = require('./controller/user');

router.use((req, res, next) => {
  console.log('Time: ', Date.now()),
  next();
});
router.get('/info', userController.get);
router.post('/login', userController.check);
router.post('/', userController.create);
//create get router by id and create controller for this

module.exports = router;
