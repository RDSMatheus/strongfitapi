const router = require('express').Router();

const User = require('../controller/UserController');

router.post('/register', User.register);

module.exports = router;
