var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const database = {
    isValidToken: (id, token) => {
        jwt.verify(token, "123456", function(err, decoded) {
            return decoded.id === id;
        });
    },
};

/* is Token Valid */
router.get('/isValidToken/:id', function(req, res, next) {
    res.send(database.isValidToken(req.params.id, req.body));
});

module.exports = router;