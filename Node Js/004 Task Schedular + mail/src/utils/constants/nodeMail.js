const nodemailer = require("nodemailer");
const { MailError } = require("../constants/errors/errorClass");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});


const sendEmail = async (
  to,
  subject,
  title,
  description,
  createdBy,
  assignedTo
) => {
  console.log(
    "Mail body data ",
    to,
    subject,
    title,
    description,
    createdBy,
    assignedTo
  );
  const from = transporter.options.auth.user;
  console.log("Transporter check ", from);
