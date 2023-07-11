var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/user', function(req, res, next) {
    try {
        fetch('localhost:1000/')
        .then(handleErrors)
        server.getUser(req.params.id);
    } catch ({ message }) {
        res.status(500).end(message);
    }
});      

module.exports = router;
