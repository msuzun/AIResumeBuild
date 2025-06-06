// models/Skill.js
const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  skillName: String,
  proficiency: String
});

module.exports = mongoose.model('Skill', skillSchema);