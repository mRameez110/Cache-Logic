const { createTaskService } = require("../../services/taskService");
const {
  taskCreateValidationSchema,
  validation,
} = require("../../utils/validations/validation");

const createTask = async (req, res, next) => {
  try {
    validation(req.body, taskCreateValidationSchema);

    const newTask = await createTaskService(req.body);
    res.status(201).json({
      status: true,
      message: "Task created successfully",
      task: newTask,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { createTask };
