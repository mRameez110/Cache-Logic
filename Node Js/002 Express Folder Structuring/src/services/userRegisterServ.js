const { addNewUser } = require("../utils/mockUsersData");
const bcrypt = require("bcrypt");

const userRegister = async (dataObject) => {
  const { id, username, email, password } = dataObject;

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password.toString(), saltRounds);

  const newUser = addNewUser(id, username, email, hashedPassword);
  return newUser;
};
