const bcrypt = require("bcryptjs");
const userModel = require("..//models/userModel");
const {
  UserAlreadyExistError,
  BadRequestError,
} = require("../utils/constants/errors/errorClass");
