const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../db/models/userModel");
const { BadRequestError } = require("../utils/constants/errors/index");

const register = async (dataObject) => {
	const { username, email, password } = dataObject;

	const userAlreadyExist = await UserModel.findOne({ email });

	if (userAlreadyExist) {
		throw new BadRequestError("User Already exist", 400);
	}

	const saltRounds = 10;
	const hashedPassword = await bcrypt.hash(password.toString(), saltRounds);

	const registerNewUser = new UserModel({
		username,
		email,
		password: hashedPassword,
	});

	const user = await registerNewUser.save();

	return user;
};

module.exports = { register };
