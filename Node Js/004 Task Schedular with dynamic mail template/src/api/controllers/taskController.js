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
		validation(req.body, taskCreateValidationSchema); // Add validation
	} catch (err) {
		next(err);
	}
};
