const errorHandler = (err, req, res, next) => {
	console.error(err.stack);
	const errorMessage = err.message || "Something Went wrong";
	const statusCode = err.statusCode || 500;

	res.status(statusCode).json({
		status: false,
		message: errorMessage,
		data: null,
	});
};

module.exports = errorHandler;
