// models/Qualification.js
const mongoose = require('mongoose');

const qualificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  degree: String,
  institution: String,
  duration: String,
  description: String
});

module.exports = mongoose.model('Qualification', qualificationSchema);