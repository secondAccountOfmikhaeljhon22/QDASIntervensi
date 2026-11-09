const { AuthService } = require("../services/auth.service");
const { asyncHandler } = require("../middleware/async-handler");

const authService = new AuthService();

const signUp = asyncHandler(async (req, res) => {
  const result = await authService.signUp(req.body);
  return res.status(201).json({ success: true, data: result });
});

const signIn = asyncHandler(async (req, res) => {
  const result = await authService.signIn(req.body);
  return res.status(200).json({ success: true, data: result });
});

const currentUser = (req, res) => {
  return res.status(200).json({
    success: true,
    data: {
      id: req.auth.sub,
      email: req.auth.email,
    },
  });
};

module.exports = { signUp, signIn, currentUser };

