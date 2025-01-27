const bcrypt = require("bcrypt");
const { BadRequestError } = require("../customErrors/customErrorClass");
const { addNewUser, findUserAgainstEmail } = require("../utils/mockUsersData");


const register = async (req, res, next) => {
    const { id, username, email, password } = req.body;
    console.log("Req data check in register midleware", req.body);
  
    if (findUserAgainstEmail(email)) {
      return next(new BadRequestError("User already exists", 409));
    }
    if (!id || !username || !email || !password)
      return next(new BadRequestError("Please fills all the fields"));
    next();
  };

