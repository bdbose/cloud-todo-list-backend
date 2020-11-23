const mongoose = require('mongoose');
const db = require('../dbConnect');

const Tasks = new mongoose.Schema({
  date: { type: String, trim: true },
  des: { type: String, trim: true, required: true },
});

module.exports = db.model('Tasks', Tasks);
