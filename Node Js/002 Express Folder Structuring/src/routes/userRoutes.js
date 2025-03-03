
const express = require("express");

const { register, login } = require("../middlewares/auth");

const { signUp, sigIn } = require("../controllers/userController");

const router = express.Router();

router.post("/signup", register, signUp);
router.get("/login", login, sigIn);

module.exports = router;

