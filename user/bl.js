const axios = require('axios');
const CORE_PATH = 'http://localhost:5555';
const baseURL = `${CORE_PATH}/user`;

const createUser = async (id, firstName, lastName, email, password, role) => {
    try {
        await getUser(id);
    } catch {
        const user = { id, firstName, lastName, email, password, role };

        const response = await axios.post(`${baseURL}/create`, { user });
        if (response.status !== 200) {
            throw new Error(response.status);
        }

        return response.data;
    }

    throw new Error("User already exists");
}

const deleteUser = async (id) => {
    return (await axios.delete(`${baseURL}/delete/${id}`)).status;
}

const getUser = async (id) => {
    const res = await axios.get(`${baseURL}/${id}`);
    if (!res.data) {
        throw new Error("No user with this ID exists");
    }

    return res.data;
}

const editUser = async (id, { firstName, lastName, email, password, role }) => {
    await getUser(id);
    return await axios.post(`${baseURL}/update`, { user: { id, firstName, lastName, email, password, role } });
}

module.exports = {
    createUser,
    deleteUser,
    editUser,
    getUser
}