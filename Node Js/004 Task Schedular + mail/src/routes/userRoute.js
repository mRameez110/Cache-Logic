const express = require("express");
const { createUser, getAllUsers } = require("../controllers/userController");

const router = express.Router();

router.get("/getUsers", getAllUsers);
router.post("/createUser", createUser);

module.exports = router;
