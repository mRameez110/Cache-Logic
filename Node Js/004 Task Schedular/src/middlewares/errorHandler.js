const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const errorMessage = err.message ;
  const errorCode = err.errorCode ;

  res.status(errorCode).json({
    status: "",
    message: errorMessage,
    data: "",
  });
};

module.exports = errorHandler;
