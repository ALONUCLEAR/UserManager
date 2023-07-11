var express = require('express');
var router = express.Router();
const server = require('../mockCore');

const jSend = (res, obj) => res.end(JSON.stringify(obj));

router.get('/:id', (req, res) => {
    jSend(res, server.getUser(req.params.id));
});

router.post('', (req, res) => {
    const { id, username, email, password, role } = req.body;
    jSend(res, server.createUser(id, username, email, password, role));
});

router.post('/:id/delete', (req, res) => {
    jSend(res, server.deleteUser(req.params.id));
});

router.patch('/:id/update/:field/with/:value', (req, res) => {
    const { id, field, value } = req.params;
    jSend(res, server.editField(id, field, value));
})

module.exports = router;
