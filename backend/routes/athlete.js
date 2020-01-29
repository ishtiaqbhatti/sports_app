const express = require('express');
const {
  registerAthlete,
  getAthletebyId,
  getAthletesbyUser,
  updateAthelete,
  deleteAthlete
} = require('../controllers/athelete');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', protect, registerAthlete);
router.get('/:athleteId', protect, getAthletebyId);
router.get('/', protect, getAthletesbyUser);
router.put('/:athleteId', protect, updateAthelete);
router.delete('/:athleteId', protect, deleteAthlete);

module.exports = router;
