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

class MailError extends AppError {
  constructor(message = "Error in Mail generation/transfer", errorCode = 500) {
    super(message, errorCode);
  }
}

class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized access", errorCode = 401) {
    super(message, errorCode);
  }
}

class ForbiddenError extends AppError {
  constructor(message = "Forbidden action", errorCode = 403) {
    super(message, errorCode);
  }
}

class NotFoundError extends AppError {
  constructor(message = "Requested resource not found", errorCode = 404) {
    super(message, errorCode);
  }
}
