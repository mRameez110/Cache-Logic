const express = require("express");
const router = express.Router();
const {
	createUser,
	getAllUsers,
	getUserByUserName,
} = require("../controllers/userController");

router.get("/getUsers", getAllUsers);
router.get("/user/:username", getUserByUserName);
