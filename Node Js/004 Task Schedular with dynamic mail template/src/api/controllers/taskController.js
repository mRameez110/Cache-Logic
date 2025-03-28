const {
	createTaskService,
	getAllTasksService,
	getTaskService,
} = require("../../services/taskService");
const userModel = require("../../models/userModel");
const { sendEmail } = require("../../services/emailService");
const {
	taskCreateValidationSchema,
	validation,
} = require("../../utils/validations/validations");
const { response } = require("express");

const createTask = async (req, res, next) => {
  try {
    validation(req.body, taskCreateValidationSchema);

    const newTask = await createTaskService(req.body);
    const { title, description, createdBy, assignedTo } = newTask;
    console.log("new task created detail is", title, description, createdBy, assignedTo);  // Log task details
  } catch (err) {
    next(err);
  }
};

