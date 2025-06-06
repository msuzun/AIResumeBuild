const PersonalDetails = require('../models/PersonalDetails');

exports.createOrUpdate = async (req, res, next) => {
  try {
    const { name, email, phone, address, avatar, title } = req.body;
    const userId = req.user.userId;
    let details = await PersonalDetails.findOneAndUpdate(
      { userId },
      { name, email, phone, address, avatar, title, userId },
      { new: true, upsert: true }
    );
    res.json(details);
  } catch (err) {
    next(err);
  }
};

exports.get = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const details = await PersonalDetails.findOne({ userId });
    res.json(details);
  } catch (err) {
    next(err);
  }
};