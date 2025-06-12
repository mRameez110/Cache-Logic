class AppError extends Error {
	constructor(message = "Internal Server Error", errorCode = 500) {
		super();
		this.message = message;
		this.errorCode = errorCode;
	}
}
