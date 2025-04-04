const connectDB = () => {
	if (dbURL) {
		mongoose
			.connect(dbURL)
			.then(() => console.log("Database connected successfully"))
			.catch((err) =>
				console.log("Something wrong in connecting Mongo DB ", err)
			);
	}
};

module.exports = connectDB;
