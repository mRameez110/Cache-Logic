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
    const { assignedTo } = newTask;

    const assignedUser = await userModel.findOne({
      username: assignedTo,  // Fetch assigned user details
    });
    console.log("Task assigned to details", assignedUser);
  } catch (err) {
    next(err);
  }
};
