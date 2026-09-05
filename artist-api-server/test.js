// const {
//   CustomAPIError,
//   BadRequestError,
//   NotFoundError,
// } = require("./errors/errors");

const { CustomAPIError } = require("./errors/errors");

// const error = new NotFoundError("Artist not found");

// console.log(error, "1");
// console.log(error.message, "2");
// console.log(error.statusCode, "3");

// console.log(error instanceof NotFoundError);
// console.log(error instanceof CustomAPIError);
// console.log(error instanceof Error);

class User {
  constructor(name) {
    this.name = name;
  }
}

const user = new User("jessy");

console.log(user.name);

class UnauthorizedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statuscode = 401;
  }
}

class ForbiddenError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statuscode = 403;
  }
}

// module.exports = {ForbiddenError, UnauthorizedError, }

// app.get('/forget', function(req, res){
//   res.clearCookie('remember');
//   res.redirect(req.get('Referrer') || '/');
// });

// app.post('/', function(req, res){
//   var minute = 60000;

//   if (req.body && req.body.remember) {
//     res.cookie('remember', 1, { maxAge: minute })
//   }

//   res.redirect(req.get('Referrer') || '/');
// });

// if (process.env.NODE_ENV !== 'test') app.use(logger(':method :url'))
