// models/Hobby.js
const mongoose = require('mongoose');

const hobbySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  hobby: String
});

module.exports = mongoose.model('Hobby', hobbySchema);