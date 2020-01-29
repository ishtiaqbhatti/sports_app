const asyncHandler = require('../middleware/async');
const Team = require('../models/Team');

// @desc      Register team by Manager
// @route     POST /api/v1/team/register
// @access    Private
exports.registerTeam = asyncHandler(async (req, res, next) => {
  const { id } = req;
  const { name, clubId } = req.body;

  // Create team
  const team = await Team.create({
    userId: id,
    name,
    clubId
  });

  return res.status(200).json({ success: 1, data: team });
});

// @desc      Assign Coach to a Team
// @route     PATCH /api/v1/team/{teamId}/assign-coach
// @access    Private
exports.assignCoach = asyncHandler(async (req, res, next) => {
  // Get teamId from params and coachId
  const { teamId } = req.params;
  const { coachId } = req.body;

  // Creating a object to update the coach
  const updatedCoach = {
    coachAssigned: coachId,
    coachStatus: true
  };
  // Find a team by Teamid and update the coach
  const team = await Team.findOneAndUpdate(
    { _id: teamId },
    { updatedCoach },
    { new: true }
  );

  return res.status(200).json({ success: 1, data: team });
});

// @desc      Assign Athelete to a Team
// @route     PATCH /api/v1/team/{teamId}/assign-athelete
// @access    Private
exports.assignAthelete = asyncHandler(async (req, res, next) => {
  // Get teamId from params and coachId
  const { teamId } = req.params;
  const { athleteId } = req.body;

  // Creating a object to update the coach
  const updatedAthelete = {
    athleteId
  };

  // Find a team by Teamid
  // Check if athlete already there, else push to the team
  await Team.updateOne(
    {
      _id: teamId,
      'athletes.athleteId': { $ne: athleteId }
    },
    { $push: { athletes: updatedAthelete } }
  );

  return res.status(200).json({
    success: 1,
    message: 'Successfully updated the atheltes of the team'
  });
});

// @desc      Get team by Id
// @route     GET /api/v1/team/${teamId}
// @access    Private
exports.getTeam = asyncHandler(async (req, res, next) => {
  const { teamId } = req.params;
  const team = await Team.findOne({ _id: teamId })
    .populate('userId')
    .populate('clubId')
    .populate('coachAssigned')
    .populate('athletes.athleteId')
    .lean();

  return res.status(200).json({ success: 0, data: team });
});

// @desc      Get teams by Club
// @route     GET /api/v1/team/club/${clubId}
// @access    Private
exports.getTeamsbyClub = asyncHandler(async (req, res, next) => {
  const { clubId } = req.params;
  const teams = await Team.find({ clubId })
    .populate('userId')
    .populate('clubId')
    .populate('coachAssigned')
    .populate('athletes.athleteId')
    .lean();

  return res.status(200).json({ success: 1, data: teams });
});

// @desc      Delete Team
// @route     DELETE /api/v1/team/${teamId}
// @access    Private
exports.deleteTeam = asyncHandler(async (req, res, next) => {
  const { teamId } = req.params;
  const teams = await Team.findOneAndDelete({ _id: teamId });

  return res.status(200).json({ success: 1, data: teams });
});
