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
	} catch (err) {
		next(err);
	}
};
