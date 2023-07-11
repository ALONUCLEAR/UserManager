var express = require('express');
var router = express.Router();

const database = {
    isValidToken: (id, token) => id == token.id,
};

/* is Token Valid */
router.get('/isValidToken/:id', function(req, res, next) {
    res.send(database.isValidToken(req.params.id, req.body));
});

module.exports = router;