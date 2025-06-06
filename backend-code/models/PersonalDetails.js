// models/PersonalDetails.js
const mongoose = require('mongoose');

const personalDetailsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  email: String,
  phone: String,
  address: String,
  avatar: String,
  title: String
});

module.exports = mongoose.model('PersonalDetails', personalDetailsSchema);