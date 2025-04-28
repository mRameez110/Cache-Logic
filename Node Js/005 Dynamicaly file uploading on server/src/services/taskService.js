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
  const getTaskService = async (dataObject) => {
    const taskCratedBy = await taskModel.findOne({
      createdBy: dataObject.params.username,
    });

    console.log("See username for task ", taskCratedBy);
    if (taskCratedBy) return taskCratedBy;
    const taskAssignedUsername = await taskModel.findOne({
      assignedTo: dataObject.params.username,
    });
    if (taskAssignedUsername) return taskAssignedUsername;
    throw new BadRequestError("username does't exist", 400);
  }
  module.exports = { createTaskService, getAllTasksService, getTaskService };
