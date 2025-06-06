const Experience = require('../models/Experience');

exports.create = async (req, res, next) => {
  try {
    const { jobTitle, companyName, location, duration, description, isCurrentlyWorking } = req.body;
    const userId = req.user.userId;
    const exp = await Experience.create({ jobTitle, companyName, location, duration, description, isCurrentlyWorking, userId });
    res.status(201).json(exp);
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const exps = await Experience.find({ userId });
    res.json(exps);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Experience.deleteOne({ _id: id, userId: req.user.userId });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};