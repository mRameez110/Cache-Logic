const { findUserAgainstEmail } = require("../utils/mockUsersData");
const jwt = require("jsonwebtoken");

const userSignin = async (reqData) => {
  const { email, password } = reqData;
  console.log("Check body in user controller Login ", email, password);

  const loginUser = findUserAgainstEmail(email);
  const { password: _, ...sendUserWithoutPassword } = loginUser;

  const token = jwt.sign({ email: email }, process.env.secret);

  console.log("See token value in user sign in Services ", token);

  return { user: sendUserWithoutPassword, token };
};

module.exports = userSignin;
