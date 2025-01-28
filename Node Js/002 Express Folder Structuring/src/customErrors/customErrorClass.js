class AppError extends Error {
    constructor(message, statusCode = 500) {
      super();
      this.message = message;
      this.statusCode = statusCode;
    }
  }
  

  class RouteNotFoundError extends AppError {
    constructor(message = "Route does't exist", errorCode = 404) {
      const errorMessage = message;
      const statusCode = errorCode;
      super(errorMessage, statusCode);
    }
  }

  class BadRequestError extends AppError {
    constructor(message = "Bad Request", errorCode = 400) {
      console.log("Hello Bad request is..");
      const errorMessage = message;
      const statusCode = errorCode;
      super(errorMessage, statusCode);
    }
  }


  module.exports = { RouteNotFoundError, BadRequestError };
