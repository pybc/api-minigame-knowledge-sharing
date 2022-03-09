const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getAllUsers);
router.post("/create", createUser);
router.get("/:id", getUserById);

module.exports = router;
