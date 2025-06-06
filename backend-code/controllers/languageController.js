const Language = require('../models/Language');

exports.create = async (req, res, next) => {
  try {
    const { language, proficiency } = req.body;
    const userId = req.user.userId;
    const l = await Language.create({ language, proficiency, userId });
    res.status(201).json(l);
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const ls = await Language.find({ userId });
    res.json(ls);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Language.deleteOne({ _id: id, userId: req.user.userId });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};