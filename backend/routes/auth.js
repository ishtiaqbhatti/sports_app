const express = require('express');
const {
  registerManager,
  registerUser,
  login,
  logout
} = require('../controllers/auth');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', protect, registerUser);
router.post('/register/manager', registerManager);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
