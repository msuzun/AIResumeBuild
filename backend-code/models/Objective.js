// models/Objective.js
const mongoose = require('mongoose');

const objectiveSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: String
});

module.exports = mongoose.model('Objective', objectiveSchema);