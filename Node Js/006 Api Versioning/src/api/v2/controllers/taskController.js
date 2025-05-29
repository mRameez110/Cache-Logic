const { createTaskService } = require("../../../services/taskService");
const { getAllTasksService } = require("../../../services/taskService");
const { getTaskService } = require("../../../services/taskService");
const userModel = require("../../../models/userModel");
const { sendEmail } = require("../../../services/emailService");
const {
	taskCreateValidationSchema,
} = require("../../../utils/validations/validations");
const { validation } = require("../../../utils/validations/validations");

const createTask = async (req, res, next) => {
	try {
		validation(req.body, taskCreateValidationSchema);
		const newTask = await createTaskService(req.body);
		const { title, description, createdBy, assignedTo } = newTask;
		console.log(
			"new task created detail is",
			title,
			description,
			createdBy,
			assignedTo
		);
		const assignedUser = await userModel.findOne({ username: assignedTo });
		console.log("Task assigned to details ", assignedUser);
		const receiverMail = assignedUser.email;
		sendEmail(
			receiverMail,
			"Task Notification",
			title,
			description,
			createdBy,
			assignedTo
		)
			.then((response) => {
				console.log("Email sended successfully", response);
				res.status(201).json({
					status: true,
					message: "Task created successfully using version 1 api",
					task: newTask,
				});
			})
			.catch((err) => {
				console.log("Error in sending Email to user or client", err);
				next(err);
			});
	} catch (err) {
		next(err);
	}
};

const getAllTasks = async (req, res, next) => {};
