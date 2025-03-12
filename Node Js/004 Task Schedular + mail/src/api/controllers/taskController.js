const { createTaskService } = require("../../services/taskService");

const createTask = async (req, res, next) => {
	try {
		const newTask = await createTaskService(req.body);

		const { title, description, createdBy, assignedTo } = newTask;

		console.log(
			"new task created detail is",
			title,
			description,
			createdBy,
			assignedTo
		);

		const assignedUser = await userModel.findOne({
			username: assignedTo,
		});
		console.log("Task assigned to details ", assignedUser);
		const receiverMail = assignedUser.email;

			} catch (err) {
		next(err);
	}
};
