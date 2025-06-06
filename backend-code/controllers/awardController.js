const Award = require('../models/Award');

exports.create = async (req, res, next) => {
  try {
    const { awardName, issuer, date, description } = req.body;
    const userId = req.user.userId;
    const a = await Award.create({ awardName, issuer, date, description, userId });
    res.status(201).json(a);
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const as = await Award.find({ userId });
    res.json(as);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Award.deleteOne({ _id: id, userId: req.user.userId });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};