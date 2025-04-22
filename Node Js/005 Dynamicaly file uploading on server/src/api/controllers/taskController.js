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

const createTask = async (req, res, next) => {
  validation(req.body, taskCreateValidationSchema);
const newTask = await createTaskService(req.body);

