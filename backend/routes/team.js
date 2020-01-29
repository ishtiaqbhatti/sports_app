const express = require('express');
const {
  registerTeam,
  assignCoach,
  assignAthelete,
  getTeam,
  getTeamsbyClub,
  deleteTeam
} = require('../controllers/team');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', protect, registerTeam);
router.patch('/:teamId/assign-coach', protect, assignCoach);
router.patch('/:teamId/assign-athlete', protect, assignAthelete);
router.get('/:teamId', protect, getTeam);
router.get('/club/:clubId', protect, getTeamsbyClub);
router.delete('/:teamId', protect, deleteTeam);

module.exports = router;
