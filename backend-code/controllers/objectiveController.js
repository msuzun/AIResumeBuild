const Objective = require('../models/Objective');

exports.createOrUpdate = async (req, res, next) => {
  try {
    const { text } = req.body;
    const userId = req.user.userId;
    let obj = await Objective.findOneAndUpdate(
      { userId },
      { text, userId },
      { new: true, upsert: true }
    );
    res.json(obj);
  } catch (err) {
    next(err);
  }
};

exports.get = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const obj = await Objective.findOne({ userId });
    res.json(obj);
  } catch (err) {
    next(err);
  }
};