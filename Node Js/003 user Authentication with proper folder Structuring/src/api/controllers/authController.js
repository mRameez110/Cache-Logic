const { BadRequestError } = require("../.././utils/constants/errors/index");
const { register, login } = require("../../services/authServices");
const {
	signUpSchema,
	signInSchema,
} = require("../../utils/validations/authValidation");

const signUp = async (req, res, next) => {
	try {
		const { error } = signUpSchema.validate(req.body);
		if (error) throw new BadRequestError(error.details[0].message);

		const result = await register(req.body);
		if (!result)
			throw new BadRequestError("Something wrong in registering user");

		res.status(200).send({
			Request: "Successful",
			New_User: result,
		});
	} catch (err) {
		next(err);
	}
};

module.exports = { signUp };
