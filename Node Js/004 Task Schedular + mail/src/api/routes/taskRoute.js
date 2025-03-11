const express = require("express");

const router = express.Router();

router.get("/allTasks", (req, res) => {
	res.send("All tasks");
});
