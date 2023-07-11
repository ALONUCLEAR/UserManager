const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// enum Role {
//     Admin,
//     Organization,
//     Student,
//     Teacher
// };

const userSchema = new Schema({
  _id: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: Number
});

// Compile model from schema
module.exports = mongoose.model("User", userSchema);