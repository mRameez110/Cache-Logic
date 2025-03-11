const express = require("express");
const { getAllTasks } = require("../controllers/taskController");

const router = express.Router();

router.get("/allTasks", getAllTasks);

router.post("/createTask", (req, res) => {
	res.send("Route for task create");
});
