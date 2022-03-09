const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const baseSchema = require("../models/baseSchema");

const userSchema = new Schema(
  {
    name: String,
    firstName: String,
    lastName: String,
    studentId: String,
  },
  baseSchema
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
