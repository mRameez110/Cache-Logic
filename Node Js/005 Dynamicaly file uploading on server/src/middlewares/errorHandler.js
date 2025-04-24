const errorHandler = (err, req, res, next) => {
	console.error(err.stack);
	// console.log("What are properties of error ", err);
	const errorMessage = err.message || "Something Bad";
	const errorCode = err.errorCode || 500;
	res.status(errorCode).json({
		status: false,
		message: errorMessage,
		data: null,
	});
};

module.exports = errorHandler;
