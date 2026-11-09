const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const apiRoutes = require("./routes");
const { errorHandler } = require("./middleware/error-handler");
const { AppError } = require("./domain/shared/app-error");

function createApp({ corsOrigin = process.env.CORS_ORIGIN || "*" } = {}) {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: corsOrigin === "*" ? true : corsOrigin }));
  app.use(express.json({ limit: "1mb" }));
  app.use("/api/v1", apiRoutes);
  app.use((req, res, next) => {
    next(new AppError("Endpoint tidak ditemukan.", 404));
  });
  app.use(errorHandler);

  return app;
}

module.exports = { createApp };

