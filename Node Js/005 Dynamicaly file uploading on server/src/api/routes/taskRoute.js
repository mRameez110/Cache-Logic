const express = require("express");
const {
  createTask,
  getAllTasks,
  getTaskByUsername,
} = require("../controllers/taskController");

const router = express.Router();
