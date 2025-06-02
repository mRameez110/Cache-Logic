const errorHandler = (err, req, res, next) => {
	console.error(err.stack);
	const errorMessage = err.message || "Something Bad";
	const errorCode = err.errorCode || 500;
};
