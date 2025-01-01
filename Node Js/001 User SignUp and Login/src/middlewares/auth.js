const bcrypt = require("bcrypt");
const { BadRequestError } = require("../customErrors/customErrorClass");
const { addNewUser, findUserAgainstEmail } = require("../utils/mockUsersData");

const register = async (req, res, next) => {
  const { id, username, email, password } = req.body;
  console.log("Req data check in register midleware", req.body);

  if (!id || !username || !email || !password)
    return next(new BadRequestError("Please fills all the fields"));

  if (findUserAgainstEmail(email)) {
    return next(new BadRequestError("User already exists", 409));
  }

  next();
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("body of login", email, password);

  if (!email || !password)
    return next(new BadRequestError("Please fill all fields", 400));

  const findUser = findUserAgainstEmail(email);
  console.log("check what is find user on login middleware ", findUser);
  if (!findUser) return next(new BadRequestError("Email does't exist"));

  const passwordCheck = bcrypt.compareSync(
    password.toString(),
    findUser.password
  );
  if (!passwordCheck) return next(new BadRequestError("Password does't match"));
  next();
};
