const asyncHandler = require("../middleware/async");
const Club = require("../models/Club");

// @desc      Register club by Manager
// @route     POST /api/v1/club/register
// @access    Private
exports.registerClub = asyncHandler(async (req, res, next) => {
  const { id, name, country, city, phoneNumber } = req.body;

  // Create club
  const club = await Club.create({
    userId: id,
    name,
    country,
    city,
    phoneNumber
  });

  return res.status(200).json({ success: 1, data: club });
});

// @desc      Approve club by Admin
// @route     PATCH /api/v1/club/${clubId}/approve
// @access    Private
exports.approveClub = asyncHandler(async (req, res, next) => {
  const { clubId } = req.params;

  await Club.updateOne({ _id: clubId }, { approved: true });

  return res
    .status(200)
    .json({ success: 1, message: "Successfully Approved the Club" });
});

// @desc      Approve club by Admin
// @route     PATCH /api/v1/club/${clubId}/decline
// @access    Private
exports.declineClub = asyncHandler(async (req, res, next) => {
  const { clubId } = req.params;

  await Club.updateOne({ _id: clubId }, { approved: false });

  return res
    .status(200)
    .json({ success: 1, message: "Successfully Decline the Club" });
});

// @desc      Get All Clubs for Admin
// @route     GET /api/v1/club/admin/all
// @access    Private
exports.getAllClubsforAdmin = asyncHandler(async (req, res, next) => {
  const allClubs = await Club.find({})
    .populate("userId")
    .lean();

  return res.status(200).json({ success: 1, data: allClubs });
});

// @desc      Get All Clubs for Manager
// @route     GET /api/v1/club/manager/all
// @access    Private
exports.getAllClubsforManager = asyncHandler(async (req, res, next) => {
  const { id } = req;
  const allClubs = await Club.find({ userId: id }).lean();

  return res.status(200).json({ success: 1, data: allClubs });
});
