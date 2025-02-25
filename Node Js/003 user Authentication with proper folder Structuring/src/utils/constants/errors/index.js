class AppError extends Error {
	constructor(message, statusCode = 500) {
		super();
		this.message = message;
		this.statusCode = statusCode;
	}
}

class RouteNotFoundError extends AppError {
	constructor(message = "Route does't exist", statusCode = 404) {
		super(message, statusCode);
	}
}

class AccountAlreadyExistsError extends AppError {
	constructor(message = "", statusCode = 404) {
		this.name = "AccountAlreadyExistsError";
		super(message, statusCode);
	}
}

class BadRequestError extends AppError {
	constructor(message = "Bad Request", statusCode = 400) {
		super(message, statusCode);
	}
}

module.exports = {
	AppError,
	RouteNotFoundError,
	AccountAlreadyExistsError,
	BadRequestError,
};
