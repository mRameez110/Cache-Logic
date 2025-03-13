const nodemailer = require("nodemailer");
const { MailError } = require("../constants/errors/errorClass");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});
