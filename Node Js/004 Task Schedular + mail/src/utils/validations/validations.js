const registerValidationSchema = joi
  .object({
    username: joi.string().min(3).max(50).trim().required(),
    email: joi.string().min(3).max(50).email().trim().required(),
    password: joi.string().min(6).required(),
  })
  .options({ abortEarly: true });

const taskCreateValidationSchema = joi
  .object({
    title: joi.string().trim().required(),
    description: joi.string().trim(),
    createdBy: joi.string().trim().required(),
    assignedTo: joi.string().trim().required(),
  })
  .options({ abortEarly: true });
