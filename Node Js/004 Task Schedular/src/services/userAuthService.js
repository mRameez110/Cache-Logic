const userModel = require("..//models/userModel");

const registerService = async (dataObject) => {
	const { username, email, password } = dataObject;

	const userNameAlreadyExist = await userModel.findOne({ username });

	if (userNameAlreadyExist) {
		throw new Error("Username already in use", 400);
	}

	const userEmailAlreadyExist = await userModel.findOne({ email });

	if (userEmailAlreadyExist) {
		throw new Error("Email already in use", 400);
	}

	const registerNewUser = new userModel({
		username,
		email,
	});

	const user = await registerNewUser.save();
	return user;
};

module.exports = { registerService };
