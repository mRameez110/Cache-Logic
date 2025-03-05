const registerValidationSchema = joi
  .object({
    username: joi.string().min(3).max(50).required(),
    email: joi.string().email().min(1).max(50).required(),
    password: joi.string().min(1).required(),
  })
