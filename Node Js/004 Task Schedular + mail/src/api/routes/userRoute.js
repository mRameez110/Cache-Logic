const express = require("express");
const {
	createUser,
	getAllUsers,
	getUserByUserName,
} = require("../controllers/userController");

const router = express.Router();

router.get("/getUsers", getAllUsers);
router.get("/user/:username", getUserByUserName);
router.post("/createUser", createUser);

module.exports = router;
