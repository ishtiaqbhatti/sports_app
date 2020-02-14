const asyncHandler = require("../middleware/async");

const User = require("../models/User");

// @desc    Register User (Roles: manager)
// @oute    POST /api/v1/auth/register/manager
// @access  Public

exports.registerManager = asyncHandler(async (req, res, next) => {
  const { userName, email, password, role } = req.body;

  // Create user
  const user = await User.create({ userName, email, password, role });
  return res.status(200).json({
    success: 1,
    message: `User with role ${user.role} successfully created`
  });
});

// @desc    Register User (Roles: admin, manager, coach, student)
// @oute    POST /api/v1/auth/register
// @access  Private

exports.registerUser = asyncHandler(async (req, res, next) => {
  const { userName, email, password, role, createdBy } = req.body;

  // Create user
  const user = await User.create({
    userName,
    email,
    password,
    role,
    createdBy
  });
  return res.status(200).json({
    success: 1,
    message: `User with role ${user.role} successfully created`
  });
});

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate emil & password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  // Check for user
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  sendTokenResponse(user, 200, res);
});

// @desc      Log user out / clear cookie
// @route     GET /api/v1/auth/logout
// @access    Private
exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });

  res.status(200).json({
    success: true,
    data: {}
  });
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({
      success: true,
      token
    });
};
