const express = require("express");
const router = express.Router();
const {
	createTask,
	getAllTasks,
	getTaskByUsername,
} = require("../controllers/taskController");

router.get("/allTasks", getAllTasks);
