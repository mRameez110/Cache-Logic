const errorHandler = (err, req, res, next) => {
	console.error(err.stack);
	const errorMessage = err.message || "Something Bad";
};
