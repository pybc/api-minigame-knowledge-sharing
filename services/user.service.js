const User = require("../models/user.model");

module.exports = {
  createUser: async (payload) => {
    try {
      const user = new User(payload);
      await user.save();
      return true;
    } catch (error) {
      console.log("[Error] UserService-createUser error => ", error.message);
    }
  },

  getAllUsers: async () => {
    try {
      const userList = await User.find({});
      return userList;
    } catch (error) {
      console.log("[Error] UserService-getAllUsers error => ", error.message);
    }
  },

  getUserById: async (id) => {
    try {
      const user = await User.findOne({ _id: id });
      return user;
    } catch (error) {
      console.log("[Error] UserService-getUserById error => ", error.message);
    }
  },
};
