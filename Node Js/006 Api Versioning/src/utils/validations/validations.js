const joi = require("joi");

const registerValidationSchema = joi
	.object({
		username: joi.string().min(3).max(50).trim().required(),
	})
	.options({ abortEarly: true });
