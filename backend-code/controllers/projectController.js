const Project = require('../models/Project');

exports.create = async (req, res, next) => {
  try {
    const { projectName, description, role, duration } = req.body;
    const userId = req.user.userId;
    const project = await Project.create({ projectName, description, role, duration, userId });
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const projects = await Project.find({ userId });
    res.json(projects);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Project.deleteOne({ _id: id, userId: req.user.userId });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};