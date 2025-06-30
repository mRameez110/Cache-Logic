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
const imageDirective = path.join(__dirname, "../public");
const imageFiles = fs.readdirSync(imageDirective);
const foundedImage = imageFiles.find(
	(file) =>
		path.basename(file, path.extname(file)).toLowerCase() ===
		"logo".toLowerCase()
);
const foundedImagePath = path.join(imageDirective, foundedImage);
const imageIntoBase64 = fs.readFileSync(foundedImagePath, {
	encoding: "base64",
});

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const transporterConfig = {
	service: "gmail",
	auth: {
		user: emailUser,
		pass: emailPass,
	},
};

const transporter = nodemailer.createTransport(transporterConfig);
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
};
