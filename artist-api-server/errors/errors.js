class CustomAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

// this can use here or externally so i will use a page 404 in json
class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = { CustomAPIError, NotFoundError, BadRequestError };
