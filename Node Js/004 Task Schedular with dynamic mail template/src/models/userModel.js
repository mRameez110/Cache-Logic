const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/.+@.+\..+/, "Please enter a valid email address"],
		},
		password: {
			type: String,
			required: true,
			minlength: [6, "Password should be at least 6 characters long"],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
