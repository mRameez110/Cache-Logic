const {
	getAllUsersService,
} = require("../../../../../../Cache Logics/Coding/Node Js/004 Task Schedular + mail/src/services/userAuthService");
const { registerService } = require("../../services/userAuthService");
const {
	registerValidationSchema,
	validation,
} = require("../../utils/validations/validations");

const createUser = async (req, res, next) => {
	try {
		validation(req.body, registerValidationSchema);
		const result = await registerService(req.body);

		res.status(200).json({
			status: true,
			message: "User created Successfully",
			data: result,
		});
	} catch (err) {
		next(err);
	}
};

const getAllUsers = async (req, res, next) => {
	try {
		const users = await getAllUsersService();

		res.status(200).json({
			status: true,
			message: "All user request successful",
			data: users,
		});
	} catch (error) {
		next(error);
	}
};
