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
