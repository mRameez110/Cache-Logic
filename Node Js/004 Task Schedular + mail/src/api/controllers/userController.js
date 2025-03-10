const { registerService } = require("../../services/userAuthService");

const createUser = async (req, res, next) => {
	try {
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
