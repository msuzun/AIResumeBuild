// models/Experience.js
const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  jobTitle: String,
  companyName: String,
  location: String,
  duration: String,
  description: String,
  isCurrentlyWorking: Boolean
});

module.exports = mongoose.model('Experience', experienceSchema);