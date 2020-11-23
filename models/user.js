const mongoose = require('mongoose');
const db = require('../dbConnect');

const Users = new mongoose.Schema({
  email: { type: String, required: true },
  phone: { type: String, trim: true },
  userName: { type: String, trim: true },
  password: { type: String, trim: true, required: true },
});

module.exports = db.model('user', Users);
