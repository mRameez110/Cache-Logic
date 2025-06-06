const express = require("express");
const router = express.Router();

const {
	createTask,
	getAllTasks,
	getTaskByUsername,
} = require("../controllers/taskController");

router.get("/allTasks", getAllTasks);
router.post("/createTask", createTask);
router.get("/task/:username", getTaskByUsername);

module.exports = router;
