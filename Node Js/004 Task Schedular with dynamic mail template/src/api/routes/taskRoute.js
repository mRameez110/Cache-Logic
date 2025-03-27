const express = require("express");
const { createTask } = require("../controllers/taskController");

const router = express.Router();

router.get("/allTasks", getAllTasks);
router.post("/createTask", createTask);
