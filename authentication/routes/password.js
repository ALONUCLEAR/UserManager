var express = require('express');
const { changePassword } = require('../controllers/passwordController');
var router = express.Router();

/* Post for modifying password */
router.post('/', () => { changePassword })

module.exports = router;
