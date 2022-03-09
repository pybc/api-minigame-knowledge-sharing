const {
  getAllUsers,
  getUserById,
  createUser,
} = require("../services/user.service");

module.exports = {
  createUser: async (req, res) => {
    const payload = req.body;
    if (
      typeof (payload.name) === `string` &&
      typeof (payload.firstName) === `string` &&
      typeof (payload.lastName) === `string` &&
      typeof (payload.studentId) === `string`
    ) {
       const created = await createUser(payload);
      if (created) {
        console.log("createUser success => res:", JSON.stringify(created));
        res.status(201).send("createUser Success ยิงผ่านแล้วจ้าา  !!");
      } else {
        console.log(
          "createUser failed => can't create user please check data format"
        );
        res.status(400).send();
      }
    } else {
      console.log(
        "createUser failed => can't create user please check data format"
      );
      res.status(400).send(`Can't create user please check data format. :(`);
    }
    
    
  },

  getAllUsers: async (req, res) => {
    const data = await getAllUsers();
    if (data) {
      console.log("getAllUsers success => all users:", JSON.stringify(data));
      res.status(200).send(data);
    } else {
      console.log("getAllUsers failed => all users not found");
      res.status(404).send("all users not found");
    }
  },

  getUserById: async (req, res) => {
    const { params } = req;
    const uid = params.uid;
    const data = await getUserById(Id);
    if (data) {
      console.log("getUserById success => user:", JSON.stringify(data));
      res.status(200).send(data);
    } else {
      console.log("getUserById failed => user not found");
      res.status(404).send("user not found");
    }
  },

};
