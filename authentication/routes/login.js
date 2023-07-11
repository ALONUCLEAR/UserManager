var express = require('express');
var asyncHandler = require('express-async-handler')
const { authUser } = require('../controllers/loginController');
var router = express.Router();

/* Post for login */
router.post('/', asyncHandler(async (req, res, next) => {
    authUser(req,res,next)}));

module.exports = router;