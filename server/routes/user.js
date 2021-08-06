const express = require('express');

const router = express.Router();
const userController = require('../controller/createUser');

router.post('/user', userController.create);
router.get('/user', userController.get);

module.exports = router;
