const bcrypt = require("bcryptjs");
const userModel = require("..//models/userModel");
const {
	UserAlreadyExistError,
	BadRequestError,
} = require("../utils/constants/errors/errorClass");

const registerService = async (dataObject) => {
	const { username, email, password } = dataObject;
	const userNameAlreadyExist = await userModel.findOne({ username });

	if (userNameAlreadyExist) {
		throw new UserAlreadyExistError("Username already in use", 400);
	}

	const userEmailAlreadyExist = await userModel.findOne({ email });

	if (userEmailAlreadyExist) {
		throw new UserAlreadyExistError("Email already in use", 400);
	}
	const saltRounds = 10;
	const hashPassword = await bcrypt.hash(password, saltRounds);

	const registerNewUser = new userModel({
		username,
		email,
		password: hashPassword,
	});

	const user = await registerNewUser.save();
	return user;
};

const getAllUsersService = async () => {
	const users = await userModel.find();
	if (!users) throw new BadRequestError("Not get the users");

	return users;
};
