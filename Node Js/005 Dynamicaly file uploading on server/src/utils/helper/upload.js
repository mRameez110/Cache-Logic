const multer = require("multer");
const path = require("path");
const fs = require("fs");
const baseDir = path.join(__dirname, "../../public/uploadDir");
const storage = multer.diskStorage({});
destination: (req, file, cb) => {
	const type = req.body.type;
	switch (type) {
		case "profile": ...
		case "post": ...
		case "cover": ...
		default: ...
	}
	
};
