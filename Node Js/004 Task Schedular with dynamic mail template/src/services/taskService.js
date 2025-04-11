const taskModel = require("../models/taskModel");
const userModel = require("../models/userModel");
const { BadRequestError } = require("../utils/constants/errors/errorClass");

const createTaskService = async (dataObject) => {
  const { title, description, createdBy, assignedTo } = dataObject;
  const findTaskCrater = await userModel.findOne({ username: createdBy });
  console.log("Task crater finding ", findTaskCrater);
  if (!findTaskCrater)
    throw new BadRequestError(
      "Your are not register. first register to create task",
      400
    );
    const findTaskAssignedUser = await userModel.findOne({
      username: assignedTo,
    });
  