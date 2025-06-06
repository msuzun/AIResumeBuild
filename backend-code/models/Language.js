// models/Language.js
const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  language: String,
  proficiency: String
});

module.exports = mongoose.model('Language', languageSchema);