const express = require("express");
const upload = require("../../utils/helper/upload");

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
