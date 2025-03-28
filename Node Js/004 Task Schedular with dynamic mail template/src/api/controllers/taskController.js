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
		const { assignedTo, title, description, createdBy } = newTask;

		const assignedUser = await userModel.findOne({
			username: assignedTo,
		});

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
				console.log("Email sent successfully", response);
				res.status(201).json({
					status: true,
					message: "Task created successfully",
					task: newTask,
				});
			})
			.catch((err) => {
				console.log("Error in sending email", err);
				next(err);
			});
	} catch (err) {
		next(err);
	}
};

const getAllTasks = async (req, res, next) => {
	try {
		const tasks = await getAllTasksService();
		res.status(200).send({
			status: true,
			message: "All task List is below",
			data: tasks,
		});
	} catch (error) {
		next(error);
	}
};

const getTaskByUsername = async (req, res, next) => {
	try {
	
	} catch (error) {
		next(error);
	}
};
