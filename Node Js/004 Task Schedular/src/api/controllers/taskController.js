const {
  taskCreateValidationSchema,
  validation,
} = require("../../utils/validations/validation");

const createTask = async (req, res, next) => {
  try {
    validation(req.body, taskCreateValidationSchema);

    const newTask = await createTaskService(req.body);
  } catch (err) {
    next(err);
  }
};

module.exports = { createTask };
