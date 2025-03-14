const registerValidationSchema = joi
  .object({
    username: joi.string.trim().required(),
    email: joi.string().email().trim().required(),
    password: joi.string().required(),
  })
  .options({ abortEarly: true });
