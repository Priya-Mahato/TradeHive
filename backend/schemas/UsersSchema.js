const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

const UsersSchema = new Schema({
  name: {
    type: String,
    required: [true, "Your name is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  token: {
    type: String  
  },
});

module.exports = { UsersSchema };