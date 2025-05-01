const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Base directory for uploads
const baseDir = path.join(__dirname, "../../public/uploadDir");

// Configure Multer storage
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		// Extract the type from the form data
		const type = req.body.type;
		console.log("See the type of request body:", type);
		let folder = baseDir; // Default to base directory if type is not valid

		// Match type to subfolders
		switch (type) {
			case "profile":
				folder = path.join(baseDir, "profile");
				break;
			case "post":
				folder = path.join(baseDir, "post");
				break;
			case "cover":
				folder = path.join(baseDir, "cover");
				break;
			default:
				folder = path.join(baseDir, "general"); // Optional: For undefined types
				break;
		}

		// Check if the folder exists, if not, create it
		if (!fs.existsSync(folder)) {
			fs.mkdirSync(folder, { recursive: true }); // Create the folder, including parent folders
			console.log(`Directory created: ${folder}`);
		}

		cb(null, folder); // Set the correct folder for the file
	},
	filename: (req, file, cb) => {
		// Use a unique timestamp-based name for the file
		const uniqueName = `${Date.now()}${path.extname(file.originalname)}`;
		cb(null, uniqueName);
	},
});

// File filter to allow only images
const fileFilter = (req, file, cb) => {
	if (file.mimetype.startsWith("image/")) {
		cb(null, true);
	} else {
		cb(new Error("Only image files are allowed!"), false);
	}
};

// Export configured multer instance
const upload = multer({ storage, fileFilter });

module.exports = upload;
