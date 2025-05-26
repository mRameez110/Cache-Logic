const {
	registerService,
	getAllUsersService,
	getUserService,
} = require("../../../services/userAuthService");
const {
	registerValidationSchema,
	validation,
} = require("../../../utils/validations/validations");

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

const getUserByUserName = async (req, res, next) => {
	try {
		const user = await getUserService(req);
		res.status(200).json({
			status: true,
			message: "user details are below",
			data: user,
		});
	} catch (error) {
		next(error);
	}
};
