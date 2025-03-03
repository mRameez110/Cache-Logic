const joi = require("joi");

const signUpSchema = joi
	.object({
		username: joi.string().min(3).max(50).trim().required(),
		email: joi.string().email().min(1).max(50).trim().required(),
		password: joi.string().min(1).required(),
	})
	.options({ abortEarly: true });

const signInSchema = joi
	.object({
		email: joi.string().email().min(1).max(50).required(),
		password: joi.string().min(1).required(),
	})
	.options({ abortEarly: true });

module.exports = {
	signUpSchema,
	signInSchema,
};
