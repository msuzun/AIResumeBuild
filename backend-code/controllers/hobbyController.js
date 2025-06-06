const Hobby = require('../models/Hobby');

exports.create = async (req, res, next) => {
  try {
    const { hobby } = req.body;
    const userId = req.user.userId;
    const h = await Hobby.create({ hobby, userId });
    res.status(201).json(h);
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const hobbies = await Hobby.find({ userId });
    res.json(hobbies);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Hobby.deleteOne({ _id: id, userId: req.user.userId });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};