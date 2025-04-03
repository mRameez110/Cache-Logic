const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
