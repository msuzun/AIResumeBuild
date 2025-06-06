// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  projectName: String,
  description: String,
  role: String,
  duration: String
});

module.exports = mongoose.model('Project', projectSchema);