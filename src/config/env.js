require("dotenv").config();

function loadEnv() {
  const port = Number(process.env.PORT || 3000);
  const jwtSecret = process.env.JWT_SECRET;

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("PORT harus berupa angka antara 1 dan 65535.");
  }

  if (!jwtSecret || jwtSecret.length < 32) {
    throw new Error("JWT_SECRET wajib diisi dengan minimal 32 karakter.");
  }

  return {
    nodeEnv: process.env.NODE_ENV || "development",
    port,
    jwtSecret,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || "15m",
    corsOrigin: process.env.CORS_ORIGIN || "*",
  };
}

module.exports = { loadEnv };

