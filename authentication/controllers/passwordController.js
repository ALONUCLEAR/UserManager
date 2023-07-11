const crypto = require('crypto');
const asyncHandler = require('express-async-handler');

const changePassword = asyncHandler(async (req, res) => {
    const { id, newPassword } = req.body;

    try {
        const user = undefined // get user by id
        if (user) {
            const hashedPass = hashPassword(newPassword)
            // update password for user
        } else {
            res.status(401);
            throw new Error(`User doesn't exist`)
        }
    } catch (error) {
        res.status(401);
        throw new Error(`User doesn't exist`)
    }
});

function hashPassword(pass) {
    return crypto.createHash('sha256').update(pass).digest('hex')
}

module.exports = { changePassword, hashPassword }