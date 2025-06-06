// models/Certificate.js
const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  certificateName: String,
  issuer: String,
  date: String,
  description: String
});

module.exports = mongoose.model('Certificate', certificateSchema);