const bcrypt = require("bcrypt");
const { BadRequestError } = require("../customErrors/customErrorClass");
const { addNewUser, findUserAgainstEmail } = require("../utils/mockUsersData");


