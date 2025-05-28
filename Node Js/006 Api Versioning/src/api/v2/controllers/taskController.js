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
	} catch (err) {
		next(err);
	}
};
