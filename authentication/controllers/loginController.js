var asyncHandler = require('express-async-handler')
var crypto = require('crypto');
const { generateToken } = require('../utils');

const authUser = asyncHandler(async (req, res, next) => {
    const { id, enteredPassword } = req.body;

    try {
        const user = await undefined // get user by id
        if (user && matchPassword(enteredPassword, user.password)) {
            res.json({ token: generateToken(user.id, user.role) })
        } else {
            res.status(401)
            throw new Error('Wrong ID or Password')
        }
    } catch (error) {
        res.status(401);
        throw new Error(`User doesn't exist`)
    }
});

async function matchPassword(enteredPassword, userPassword) {
    return crypto.createHash('sha256').update(enteredPassword).digest('hex') === userPassword
}

module.exports =
{
    authUser
}