// models/Organization.js
const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  organizationName: String,
  role: String,
  duration: String,
  description: String
});

module.exports = mongoose.model('Organization', organizationSchema);