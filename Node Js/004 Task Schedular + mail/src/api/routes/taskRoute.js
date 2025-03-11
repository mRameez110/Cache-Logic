const express = require("express");
const {
  getAllTasks,
} = require("../controllers/taskController");


const router = express.Router();

router.get("/allTasks", (req, res) => {
	res.send("All tasks");
});
