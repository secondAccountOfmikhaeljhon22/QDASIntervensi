class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotImplementedError extends AppError {
  constructor(message = "Operasi autentikasi belum diimplementasikan.") {
    super(message, 501);
  }
}

module.exports = { AppError, NotImplementedError };

