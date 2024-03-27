const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
 username: { type: String, unique: true, required: true },
 password: { type: String, required: true },
 firstname:{ type: String},
 lastname:{ type: String},
 });
module.exports = mongoose.model('Perfect-User', userSchema);