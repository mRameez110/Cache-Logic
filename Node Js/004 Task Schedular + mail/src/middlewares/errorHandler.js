// Centralized error handler middleware
const errorHandler = (err, req, res, next) => {
  // Log the error stack for debugging
  console.error(err.stack);

  // Default error message and error code
  const errorMessage = err.message || "Something went wrong";
  const errorCode = err.errorCode || 500;

  // Send a consistent error response
  res.status(errorCode).json({
    status: false,
    message: errorMessage,
    data: null,
  });
};
