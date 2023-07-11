let { users } = require('./users');

const createUser = (id, username, email, password, role) => {
    try {
        getUser(id);
    } catch {
        const user = { id, username, email, password, role };
        users.push(user);

        return user;
    }

    throw new Error("User already exists");
}

const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);

    return id;
}


const getUser = (id) => {
    const user = users.find(user => user.id === id);

    if (!user) {
        throw new Error("No user with this ID exists");
    }

    return user;
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