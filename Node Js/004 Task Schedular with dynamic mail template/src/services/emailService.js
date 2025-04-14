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
