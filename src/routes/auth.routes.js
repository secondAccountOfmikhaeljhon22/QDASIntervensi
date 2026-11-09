const express = require("express");
const { signUp, signIn, currentUser } = require("../controllers/auth.controller");
const { authenticate } = require("../middleware/authenticate");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/me", authenticate, currentUser);

module.exports = router;

