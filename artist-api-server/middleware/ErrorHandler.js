// const errorHandlerMiddleWare = (err, req, res, next) => {
//   console.error(err.stack, "errorStack ");
//   res.status(500).send("Something broke!");
// };

// full code

const { response } = require("express");
const { CustomAPIError } = require("../errors/errors");

const errorHandlerMiddleWare = (err, req, res, next) => {
  //   if (err instanceof CustomAPIError) {
  //     return res
  //       .status(err.statusCode)
  //       .json({ msg: "err instance of customAPI" });
  //   }

  //   res.status(500).json({ msg: err });

  // better way

  let customErr = {
    statusCode: err.statusCode || 500,
    msg: err.message || "something went wrong",
    // path: err.path,
  };

  //   validator error
  if (err.name === "ValidationError") {
    // console.log(err);

    customErr.statusCode = 400;
    customErr.msg = Object.values(err.errors)
      .map((errorItem) => {
        console.log(
          errorItem.path,
          "inside map",
          `${errorItem.path}:${errorItem.message}`, // Check
        );
        return errorItem;
      })
      .join(", ");
    // console.log(customErr, "second");
  }

  // unique email

  //

  // send a response
  res.status(customErr.statusCode).json({ message: customErr.msg }); // find a way to show path and where the error ocuures
};

module.exports = errorHandlerMiddleWare;
