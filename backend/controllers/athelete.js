const asyncHandler = require('../middleware/async');
const Athelete = require('../models/Athelete');

// @desc      Build Athelete Profile
// @route     POST /api/v1/athlete/register
// @access    Private
exports.registerAthlete = asyncHandler(async (req, res, next) => {
  const { id, name, clubId } = req.body;

  // Create team
  const athlete = await Athelete.create({
    userId: id,
    name
  });

  return res.status(200).json({ success: 1, data: athlete });
});

// @desc      Get Athlete by AthleteId
// @route     GET /api/v1/athlete/${athleteId}
// @access    Private
exports.getAthletebyId = asyncHandler(async (req, res, next) => {
  const { athleteId } = req.params;
  const athelete = await Athelete.findOne({ _id: athleteId });
  return res.status(200).json({ success: 1, data: athelete });
});

// @desc      Get Athletes by Userid
// @route     GET /api/v1/athlete/
// @access    Private
exports.getAthletesbyUser = asyncHandler(async (req, res, next) => {
  const { id } = req;
  const atheletes = await Athelete.find({ userId: id }).lean();
  return res.status(200).json({ success: 1, data: atheletes });
});

// @desc      Update Athelete Profile
// @route     PUT /api/v1/athlete/${athleteId}
// @access    Private
exports.updateAthelete = asyncHandler(async (req, res, next) => {
  const { athlete } = req.params;
  const updatedAthelete = {
    name: req.body.name
  };

  // Update Athlete
  const athlete = await Athelete.findOneAndUpdate(
    { _id: athleteId },
    { updatedAthelete },
    { $new: true }
  );

  return res.status(200).json({ success: 1, data: athlete });
});

// @desc      Delete Athelete Profile
// @route     DELETE /api/v1/athlete/${athleteId}
// @access    Private
exports.deleteAthlete = asyncHandler(async (req, res, next) => {
  const { athlete } = req.params;

  // Update Athlete
  const athlete = await Athelete.findOneAndDelete({ _id: athleteId });

  return res.status(200).json({ success: 1, data: athlete });
});
