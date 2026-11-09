const express = require("express");
const authRoutes = require("./auth.routes");
const { getHealth } = require("../controllers/health.controller");

const router = express.Router();

router.get("/health", getHealth);
router.use("/auth", authRoutes);

module.exports = router;

