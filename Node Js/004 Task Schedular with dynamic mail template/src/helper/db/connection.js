const mongoose = require("mongoose");
const dbURL = process.env.DB_URL;

const connectDB = () => {
	if (dbURL) {
		mongoose
			.connect(dbURL)
			.then(() => {})
			.catch((err) => {});
	}
};
