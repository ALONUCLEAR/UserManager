var express = require('express');
var router = express.Router();

const database = {
    isValidToken: (token) => true,
};

/* is Token Valid */
router.get('/isValidToken/:token', function(req, res, next) {
    res.send(database.isValidToken(req.params.token));
});

module.exports = router;