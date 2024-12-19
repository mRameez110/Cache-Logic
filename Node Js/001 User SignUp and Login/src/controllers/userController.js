const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signUp = async (req, res) => {
  const { id, username, email, password } = req.body;

  console.log("what is in request in signup of user Controller ", req.body);

  console.log("Req data check in signup user controller", req.body);
  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(password.toString(), saltRounds);

  const result = addNewUser(id, username, email, hashedPassword);
  console.log(
    "Print data getted from  mock user data by add new user function",
    result
  );
  if (!result)
    throw new BadRequestError("Something wrong in register new user", 400);
  const { password: _, ...resultWithoutPassword } = result;

  res.status(200).send({
    Request: "Sucessful",
    New_User: resultWithoutPassword,
  });
};

const sigIn = async (req, res) => {
  const { email, password } = req.body;
  console.log("Check body in user controller Login ", email, password);

  const sendUser = findUserAgainstEmail(email);
  const { password: _, ...sendUserWithoutPassword } = sendUser;

  const token = jwt.sign({ email: email }, process.env.secret);

  console.log(
    "See token value in Login function under user controller ",
    token
  );
  res.send({
    Status: "User Loged Successfully",
    User_Data: sendUserWithoutPassword,
    Token: token,
  });
};

module.exports = { signUp, sigIn };
