const { findUserAgainstEmail } = require("../utils/mockUsersData");
const jwt = require("jsonwebtoken");

const userSignin = async (reqData) => {
  const { email, password } = reqData;

  const loginUser = findUserAgainstEmail(email);
  const { password: _, ...sendUserWithoutPassword } = loginUser;

  const token = jwt.sign({ email: email }, process.env.secret);

  return { user: sendUserWithoutPassword, token };
};

module.exports = userSignin;
