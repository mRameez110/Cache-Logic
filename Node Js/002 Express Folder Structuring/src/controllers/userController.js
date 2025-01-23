const { BadRequestError } = require("../customErrors/customErrorClass");
const userRegServ = require("../services/userRegisterServ");
const userSigninServ = require("../services/userSignInServ");


const signUp = async (req, res) => {
    const result = await userRegServ(req.body);
    console.log("The result of new user from services ", result);
  
    if (!result)
      throw new BadRequestError("Something wrong in register new user", 400);
  
    const { password: _, ...resultWithoutPassword } = result;
  
    res.status(200).send({
      Request: "Sucessful",
      New_User: resultWithoutPassword,
    });
  };
