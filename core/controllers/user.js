const User = require("../models/user");

const createUser = async (user) => {
    const {
      id,
      email,
      firstName,
      lastName,
      password,
      role,
    } = user;
  
    const newUser = new User({
    _id: id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    role: role
    });

    await newUser.save();
    return newUser;
  };

  const changePasswordByUserId = async (id, newPass) => {
    await User.updateOne({id: id}, {$set:{password:newPass}}, { new: true });
  };

  const changeRoleByUserId = async (id, role) => {
    await User.updateOne({id: id}, {$set:{role:role}});
  };

  const getUserByID = async (id) => {
    return await User.findById(id);
  }

  const deleteUserByID = async (id) => {
    await User.deleteOne({_id: id});
  }

  
module.exports = {
    changePasswordByUserId,
    changeRoleByUserId,
    createUser,
    deleteUserByID,
    getUserByID
  };