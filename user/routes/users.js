var express = require('express');
var router = express.Router();
const bl = require('../bl');

const jSend = (res, obj) => res.end(JSON.stringify(obj));

router.get('/:id', async (req, res) => {
    try {
        jSend(res, await bl.getUser(req.params.id));
    } catch ({ message }) {
        res.status(500).end(message);
    }
});

router.post('', async (req, res) => {
    try {
        const { id, firstName, lastName, email, password, role } = req.body;
        jSend(res, await bl.createUser(id, firstName, lastName, email, password, role));
    } catch ({ message }) {
        res.status(500).end(message);
    }
});

router.post('/:id/delete', async (req, res) => {
    res.status(await bl.deleteUser(req.params.id)).end();
});

router.put('/:id', async (req, res) => {
    try {
        jSend(res, await bl.editUser(req.params.id, req.body));
    } catch ({ message }) {
        res.status(500).end(message);
    }
})

module.exports = router;