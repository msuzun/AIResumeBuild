const Qualification = require('../models/Qualification');

exports.create = async (req, res, next) => {
  try {
    const { degree, institution, duration, description } = req.body;
    const userId = req.user.userId;
    const q = await Qualification.create({ degree, institution, duration, description, userId });
    res.status(201).json(q);
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const qs = await Qualification.find({ userId });
    res.json(qs);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Qualification.deleteOne({ _id: id, userId: req.user.userId });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};