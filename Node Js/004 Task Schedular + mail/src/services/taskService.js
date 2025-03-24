const createTaskService = async (dataObject) => {
	const { title, description, createdBy, assignedTo } = dataObject;

	const findTaskCrater = await userModel.findOne({ username: createdBy });
	if (!findTaskCrater)
		throw new BadRequestError(
			"Your are not register. first register to create task",
			400
		);

	const findTaskAssignedUser = await userModel.findOne({
		username: assignedTo,
	});
	if (!findTaskAssignedUser)
		throw new BadRequestError(
			"Assigned user name does't exist. Username must exist to assign task",
			400
		);

	const newTask = new taskModel({
		title,
		description,
		createdBy,
		assignedTo,
	});

	await newTask.save();
	return newTask;
};

const getAllTasksService = async () => {
	const tasks = await taskModel.find();
	if (!tasks) throw new BadRequestError("Not task exist", 400);

	return tasks;
};

const getTaskService = async (dataObject) => {};
