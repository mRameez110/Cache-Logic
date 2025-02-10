const { addNewUser } = require("../utils/mockUsersData");
const bcrypt = require("bcrypt");

const userRegister = async (dataObject) => {
  const { id, username, email, password } = dataObject;

  console.log("The data Object data in user Register Services is ", dataObject);

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password.toString(), saltRounds);

  const newUser = addNewUser(id, username, email, hashedPassword);
  console.log("new user created in user Register services ", newUser);
  return newUser;
};
