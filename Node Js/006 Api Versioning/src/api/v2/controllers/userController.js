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
	} catch (err) {
		next(err);
	}
};
