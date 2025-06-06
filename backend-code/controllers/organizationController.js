const Organization = require('../models/Organization');

exports.create = async (req, res, next) => {
  try {
    const { organizationName, role, duration, description } = req.body;
    const userId = req.user.userId;
    const o = await Organization.create({ organizationName, role, duration, description, userId });
    res.status(201).json(o);
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const os = await Organization.find({ userId });
    res.json(os);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Organization.deleteOne({ _id: id, userId: req.user.userId });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};