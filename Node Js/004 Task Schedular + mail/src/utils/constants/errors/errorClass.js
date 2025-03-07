class AppError extends Error {
  constructor(message = "Something is wrong", errorCode = 500) {
    super();
    this.message = message;
    this.errorCode = errorCode;
  }
}

module.exports = {
  AppError,
};
