const express = require("express");
const router = express.Router();
const {
	createUser,
	getAllUsers,
	getUserByUserName,
} = require("../controllers/userController");
