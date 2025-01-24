const errorHandler = (err, req, res, next) => {
    // console.error(err.stack);
    const errorMessage = err.message || "XYZ";
    const statuscode = err.statusCode || 500;
    console.log("what is error message", errorMessage);
  
    res.status(statuscode).json({
      message: errorMessage,
      ErrorCode: statuscode,
    });
  };
  

