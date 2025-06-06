const Skill = require('../models/Skill');

exports.create = async (req, res, next) => {
  try {
    const { skillName, proficiency } = req.body;
    const userId = req.user.userId;
    const skill = await Skill.create({ skillName, proficiency, userId });
    res.status(201).json(skill);
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const skills = await Skill.find({ userId });
    res.json(skills);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Skill.deleteOne({ _id: id, userId: req.user.userId });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};