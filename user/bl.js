let { users } = require('./mockUsers');

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

const editUser = (id, { username, email, password, role }) => {
    const index = users.findIndex(user => user.id === id);
    const user = getUser(id);

    if (username) { user.username = username; }
    if (email) { user.email = email; }
    if (password) { user.password = password; }
    if (role) { user.role = role; }

    users[index] = { ...users };

    return user;
}

module.exports = {
    createUser,
    deleteUser,
    editUser,
    getUser
}