let { users } = require('./users');

const createUser = (id, username, email, password, role) => {
    const user = { id, username, email, password, role };
    users.push(user);

    return user;
}

const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);

    return id;
}


const getUser = (id) => {
    return users.find(user => user.id === id);
}

const editField = (id, fieldName, newValue) => {
    const user = getUser(id);
    user[fieldName] = newValue;

    return user;
}

module.exports = {
    createUser,
    deleteUser,
    editField,
    getUser
}