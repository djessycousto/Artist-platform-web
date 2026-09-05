// const { CustomAPIError,  } = require("./errors/errors");
const {
  CustomAPIError,
  BadRequestError,
  NotFoundError,
} = require("./errors/errors");

const errorHandlerMiddleWare = (err, req, res, next) => {
  // default error server error 500
  let customError = {
    // set default
    statusCode: err.statusCode || 500,
    msg: err.message || "Something went wrong",
  };

  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  if (err.code && err.code === 11000) {
    customError.msg = `
      Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose an other value`;
    customError.statusCode = 400;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleWare;
