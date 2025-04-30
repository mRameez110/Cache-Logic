class AppError extends Error {
	constructor(message = "Something is wrong", errorCode = 500) {
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
