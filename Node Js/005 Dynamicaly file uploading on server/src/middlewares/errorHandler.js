const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  // console.log("What are properties of error ", err);
  const errorMessage = err.message || "Something Bad";
