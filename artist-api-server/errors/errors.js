class CustomAPIError extends Error {
  constructor(message) {
    super(message);
    this.name = "customAPIError"; // to identify the error
  }
}

// this can be use here or externally so i will use a page 404 in json
class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.name = "NotFoundError";
  }
}

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 400;
    this.name = "BadRequestError";
  }
}

module.exports = { CustomAPIError, NotFoundError, BadRequestError };
