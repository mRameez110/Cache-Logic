// Import the necessary models and error utility classes
const taskModel = require("../models/taskModel"); // Task model for task-related operations
const userModel = require("../models/userModel"); // User model to check for valid users
const { BadRequestError } = require("../utils/constants/errors/errorClass"); // Custom error class

// Service to create a task
const createTaskService = async (dataObject) => {
	const { title, description, createdBy, assignedTo } = dataObject;

	// Check if the user creating the task exists
	const findTaskCrater = await userModel.findOne({ username: createdBy });
	if (!findTaskCrater)
		throw new BadRequestError(
			"You are not registered. First, register to create a task",
			400
		);

	// Check if the assigned user exists
	const findTaskAssignedUser = await userModel.findOne({
		username: assignedTo,
	});
	if (!findTaskAssignedUser)
		throw new BadRequestError(
			"Assigned username doesn't exist. Username must exist to assign a task",
			400
		);

	// Create and save the new task
	const newTask = new taskModel({
		title,
		description,
		createdBy,
		assignedTo,
	});

	await newTask.save();
	return newTask;
};

// Service to get all tasks
const getAllTasksService = async () => {
	const tasks = await taskModel.find();
	if (!tasks) throw new BadRequestError("No tasks exist", 400);

	return tasks;
};

// Service to get a specific task
const getTaskService = async (dataObject) => {
	const taskCreatedBy = await taskModel.findOne({
		createdBy: dataObject.params.username,
	});

	if (taskCreatedBy) return taskCreatedBy;

	const taskAssignedUsername = await taskModel.findOne({
		assignedTo: dataObject.params.username,
	});

	if (taskAssignedUsername) return taskAssignedUsername;

	throw new BadRequestError("Username doesn't exist", 400);
};

// Exporting the services so they can be used in other parts of the application
module.exports = {
	createTaskService,
	getAllTasksService,
	getTaskService,
};
