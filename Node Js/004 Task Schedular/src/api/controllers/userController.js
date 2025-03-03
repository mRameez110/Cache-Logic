const { registerService } = require("../../services/userAuthService");
const {
  registerValidationSchema,
  validation,
} = require("../../utils/validations/validation");

const createUser = async (req, res, next) => {
  try {
    validation(req.body, registerValidationSchema);
    const result = await registerService(req.body);

    res.status(200).json({
      status: true,
      message: "User created Successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { createUser };
