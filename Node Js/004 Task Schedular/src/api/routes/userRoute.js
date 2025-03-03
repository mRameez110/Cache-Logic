const express = require("express");
const { createUser } = require("../controllers/userController");

const router = express.Router();

// router.get("/getUsers", getUsers);
router.post("/createUser", createUser); // done;
// router.get("/user/:username", getUserByUserName);

module.exports = router;
