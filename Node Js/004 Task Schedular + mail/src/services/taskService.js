const createTaskService = async (dataObject) => {
	const { title, description, createdBy, assignedTo } = dataObject;

	const findTaskCrater = await userModel.findOne({ username: createdBy });
	if (!findTaskCrater)
		throw new BadRequestError(
			"Your are not register. first register to create task",
			400
		);
};
