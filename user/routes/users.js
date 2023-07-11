var express = require('express');
var router = express.Router();
const server = require('../bl');

const jSend = (res, obj) => res.end(JSON.stringify(obj));

router.get('/:id', (req, res) => {
    try {
        jSend(res, server.getUser(req.params.id));
    } catch ({ message }) {
        res.status(500).end(message);
    }
});

router.post('', (req, res) => {
    try {
        const { id, username, email, password, role } = req.body;
        jSend(res, server.createUser(id, username, email, password, role));
    } catch ({ message }) {
        res.status(500).end(message);
    }
});

router.post('/:id/delete', (req, res) => {
    jSend(res, server.deleteUser(req.params.id));
});

router.put('/:id', (req, res) => {
    try {
        jSend(res, server.editUser(req.params.id, req.body));
    } catch ({ message }) {
        res.status(500).end(message);
    }
})

module.exports = router;