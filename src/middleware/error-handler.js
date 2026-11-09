const { AppError } = require("../domain/shared/app-error");

function errorHandler(error, req, res, next) {
  if (res.headersSent) {
    return next(error);
  }

  const statusCode = error instanceof AppError ? error.statusCode : 500;
  const message = statusCode === 500 ? "Terjadi kesalahan pada server." : error.message;

  if (statusCode >= 500) {
    console.error(error);
  }

  return res.status(statusCode).json({
    success: false,
    message,
  });
}

module.exports = { errorHandler };

