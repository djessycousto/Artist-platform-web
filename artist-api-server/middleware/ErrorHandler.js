const { CustomAPIError } = require("../errors/errors"); // some how this is not selected or use
// const errorHandlerMiddleWare = (err, req, res, next) => {
//   console.error(err.stack, "errorStack ");
//   res.status(500).json(err.stack);
// };

// full code

const errorHandlerMiddleWare = (err, req, res, next) => {
  //   //   if (err instanceof CustomAPIError) {
  //   //     return res
  //   //       .status(err.statusCode)
  //   //       .json({ msg: "err instance of customAPI" });
  //   //   }

  //   //   res.status(500).json({ msg: err });

  //   // // better way ==>
  let customErr = {
    statusCode: err.statusCode || 500,
    msg: err.message || "something went wrong",
    // msg: err.stack || "something went wrong", // stack
    // path: err.path,
  };

  //   // console.log(err, "eer");

  //   //   validator error
  if (err.name === "ValidationErro") {
    // console.log(err);

    customErr.statusCode = 400;
    customErr.msg = Object.values(err.errors)
      .map((errorItem) => {
        // console.log(errorItem, "err");
        return errorItem;

        // return `${errorItem.path}:${errorItem.message}`; // Check
      })
      .join(", ");
    // console.log(customErr, "second");
  }

  //   // unique email

  //   //

  //   // send a response
  res.status(customErr.statusCode).json({ message: customErr.msg });
  //   next(); // find a way to show path and where the error ocuures
};

module.exports = errorHandlerMiddleWare;

// note

/* 
how to see the stack error and how to customize error


*/
