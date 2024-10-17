const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    position: {
        type: String,
        required: [true, 'Position is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/\S+@\S+\.\S+/, 'Invalid email format']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required']
    },
    // Add other fields if necessary
}, { timestamps: true });

module.exports = mongoose.model('Staff', staffSchema);
