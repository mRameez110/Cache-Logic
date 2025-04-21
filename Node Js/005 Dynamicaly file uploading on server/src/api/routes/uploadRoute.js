const express = require("express");
const upload = require("../../utils/helper/upload");

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {

  if (!req.file) {
    return res.status(400).send("No file uploaded or invalid file type.");
  }
  res.send({
    message: "File uploaded successfully",
    filename: req.file.filename,
    file: req.file,
    type: req.body.type,
    path: req.body.path,
  });
  