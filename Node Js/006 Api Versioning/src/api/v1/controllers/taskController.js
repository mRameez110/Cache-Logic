const { createTaskService } = require("../../../services/taskService");
const {
	createTaskService,
	getAllTasksService,
} = require("../../../services/taskService");
const {
	createTaskService,
	getAllTasksService,
	getTaskService,
} = require("../../../services/taskService");
const userModel = require("../../../models/userModel");
const { sendEmail } = require("../../../services/emailService");
const {
	taskCreateValidationSchema,
} = require("../../../utils/validations/validations");
const {
	taskCreateValidationSchema,
	validation,
} = require("../../../utils/validations/validations");

const createTask = async (req, res, next) => {
	try {
		validation(req.body, taskCreateValidationSchema);
		const newTask = await createTaskService(req.body);
	} catch (err) {
		next(err);
	}
};
