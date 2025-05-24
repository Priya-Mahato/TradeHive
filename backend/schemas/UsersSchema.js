const { Schema } = require("mongoose");

const UsersSchema = new Schema({
  name: String,
  username: { type: String, unique: true },
  password: String,
});

module.exports = { UsersSchema };