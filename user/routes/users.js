var express = require('express');
var router = express.Router();
const server = require('../mockCore');

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

router.patch('/:id/update/:field/with/:value', (req, res) => {
    try {
        const { id, field, value } = req.params;
        jSend(res, server.editField(id, field, value));
    } catch ({ message }) {
        res.status(500).end(message);
    }
})

module.exports = router;
