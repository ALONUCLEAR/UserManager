const express = require('express');
const mongoose = require('mongoose');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect("mongodb+srv://mongo_user:Aa123456@cluster0.atn0ioc.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// User model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

const User = mongoose.model('User', userSchema);

// gRPC setup
const userProtoPath = 'user.proto'; // Path to your .proto file
const userProtoDefinition = protoLoader.loadSync(userProtoPath);
const userPackageDefinition = grpc.loadPackageDefinition(userProtoDefinition);
const userService = userPackageDefinition.userService;
const server = new grpc.Server();

server.addService(userService, {
  getUserById: getUserById,
  updateUser: updateUser,
  createUser: createUser,
  setPasswordById: setPasswordById,
  setRole: setRole,
});

// gRPC route implementations
function getUserById(call, callback) {
  const userId = call.request.userId;
  User.findById(userId, (err, user) => {
    if (err || !user) {
      callback(err);
    } else {
      callback(null, user);
    }
  });
}

function updateUser(call, callback) {
  const userId = call.request.userId;
  const updatedUser = call.request.user;
  User.findByIdAndUpdate(userId, updatedUser, { new: true }, (err, user) => {
    if (err) {
      callback(err);
    } else {
      callback(null, user);
    }
  });
}

function createUser(call, callback) {
  const newUser = call.request.user;
  User.create(newUser, (err, user) => {
    if (err) {
      callback(err);
    } else {
      callback(null, user);
    }
  });
}

function setPasswordById(call, callback) {
  const userId = call.request.userId;
  const password = call.request.password;
  User.findByIdAndUpdate(userId, { password: password }, { new: true }, (err, user) => {
    if (err) {
      callback(err);
    } else {
      callback(null, user);
    }
  });
}

function setRole(call, callback) {
  const userId = call.request.userId;
  const role = call.request.role;
  User.findByIdAndUpdate(userId, { role: role }, { new: true }, (err, user) => {
    if (err) {
      callback(err);
    } else {
      callback(null, user);
    }
  });
}

// Start the gRPC server
server.bind('localhost:50051', grpc.ServerCredentials.createInsecure());
server.start();