const errorHandler = (err, req, res, next) => {
	console.error(err.stack);

	// Temporary log to see the error details
	console.log("Error details:", err);

	const errorMessage = err.message || "Something went wrong";
	const errorCode = err.errorCode || 500;

	res.status(errorCode).json({
		status: false,
		message: errorMessage,
		data: null,
	});
};
