// models/Award.js
const mongoose = require('mongoose');

const awardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  awardName: String,
  issuer: String,
  date: String,
  description: String
});

module.exports = mongoose.model('Award', awardSchema);