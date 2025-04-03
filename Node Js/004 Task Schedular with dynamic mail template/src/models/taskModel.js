const mongoose = require("mongoose");

// Define the task schema with fields title, description, createdBy, and assignedTo
const taskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: String,
		createdBy: {
			type: String,
			required: true,
		},
		assignedTo: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
