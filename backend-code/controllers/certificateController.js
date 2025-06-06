const Certificate = require('../models/Certificate');

exports.create = async (req, res, next) => {
  try {
    const { certificateName, issuer, date, description } = req.body;
    const userId = req.user.userId;
    const c = await Certificate.create({ certificateName, issuer, date, description, userId });
    res.status(201).json(c);
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const cs = await Certificate.find({ userId });
    res.json(cs);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Certificate.deleteOne({ _id: id, userId: req.user.userId });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};