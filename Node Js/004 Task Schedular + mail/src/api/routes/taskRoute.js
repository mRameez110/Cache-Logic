const express = require("express");
const { getAllTasks, createTask } = require("../controllers/taskController");

const router = express.Router();

router.get("/allTasks", getAllTasks);

router.post("/createTask", createTask);

router.get("/task/:username", (req, res) => {
	res.send("Task by username");
});
