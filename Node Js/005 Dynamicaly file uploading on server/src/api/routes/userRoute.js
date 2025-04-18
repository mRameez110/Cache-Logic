const express = require("express");
const {
	createUser,
	getAllUsers,
	getUserByUserName,
} = require("../controllers/userController");

const router = express.Router();

router.get("/getUsers", getAllUsers);

router.post("/createUser", createUser);

router.get("/user/:username", getUserByUserName);
