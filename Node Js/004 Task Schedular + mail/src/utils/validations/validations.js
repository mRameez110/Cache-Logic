const registerValidationSchema = joi
  .object({
    username: joi.string.trim().required(),
    email: joi.string().email().trim().required(),
    password: joi.string().required(),
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
;
