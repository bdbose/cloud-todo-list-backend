const mongoose = require('mongoose');
const db = require('../dbConnect');

const Tasks = new mongoose.Schema({
  date: { type: String, required: true },
  des: { type: String, trim: true },
  tone: { type: String, trim: true },
  snooze: { type: String, trim: true },
  type: { type: String, required: true },
});

module.exports = db.model('Tasks', Tasks);
