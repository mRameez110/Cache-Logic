const registerValidationSchema = joi
  .object({
    username: joi.string().min(3).max(50).trim().required(),
    email: joi.string().min(3).max(50).email().trim().required(),
    password: joi.string().min(6).required(),
  })
  .options({ abortEarly: true });

const taskCreateValidationSchema = joi
  .object({
    title: joi.string().min(5).max(15).trim().required(),
    description: joi.string().max(50).trim(),
    createdBy: joi.string().min(2).max(10).trim().required(),
    assignedTo: joi.string().min(2).max(10).trim().required(),
  })
  .options({ abortEarly: true });
