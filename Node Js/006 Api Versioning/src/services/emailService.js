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
