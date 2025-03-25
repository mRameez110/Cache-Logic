const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

const { MailError } = require("../utils/constants/errors/errorClass");
const { taskMailTemplate } = require("../utils/helper/mailTemplate");

const emailTemplateSource = fs.readFileSync(
	path.join(__dirname, "../utils/helper/mailTemplate.hbs"),
	"utf8"
);

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
};

const emailTemplateCompile = handlebars.compile(emailTemplateSource);
console.log("Check email template after compile ", emailTemplateCompile);

const htmlTemplate = emailTemplateCompile({
  to,
  subject,
  title,
  description,
  createdBy,
  assignedTo,
});

console.log("check generated html ", htmlTemplate);
