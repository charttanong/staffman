const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
});

module.exports = mongoose.model('Staff', staffSchema);
