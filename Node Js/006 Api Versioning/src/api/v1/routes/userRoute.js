const express = require("express");
const router = express.Router();
const {
	createUser,
	getAllUsers,
	getUserByUserName,
} = require("../controllers/userController");

router.get("/getUsers", getAllUsers);
router.post("/createUser", createUser);
router.get("/user/:username", getUserByUserName);

module.exports = router;
