class AppError extends Error {
	constructor(message = "Internal Server Error", errorCode = 500) {
		super();
		this.message = message;
		this.errorCode = errorCode;
	}
}

class RouteNotFoundError extends AppError {
	constructor(message = "Route does't exist", errorCode = 404) {
		super(message, errorCode);
	}
}

class UserAlreadyExistError extends AppError {
	constructor(message = "User Already Exist", errorCode = 400) {
		super(message, errorCode);
	}
}

class BadRequestError extends AppError {
	constructor(message = "Bad Request", errorCode = 400) {
		super(message, errorCode);
	}
}

class MailError extends AppError {
	constructor(message = "Error in Mail generation/transfer", errorCode = 500) {
		super(message, errorCode);
	}
}

module.exports = {
	AppError,
	RouteNotFoundError,
	UserAlreadyExistError,
	BadRequestError,
	MailError,
};
