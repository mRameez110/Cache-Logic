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

const login = async (body) => {
	const { email, password } = body;
	console.log("Check body in user controller Login ", email, password);

	const loginUser = await UserModel.findOne({ email: email });
	if (!loginUser) throw new BadRequestError("User does't exist ", 409);

	const passwordCheck = bcrypt.compareSync(password, loginUser.password);
	if (!passwordCheck) throw new BadRequestError("Password does't match", 400);

	const token = jwt.sign({ email: email }, process.env.secret);

	return { user: loginUser, token };
};

module.exports = { register, login };
