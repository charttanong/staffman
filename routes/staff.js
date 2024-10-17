const express = require('express');
const router = express.Router();
const Staff = require('../models/Staff');

// Add a new staff member
router.post('/', async (req, res) => {
    try {
        const staff = new Staff(req.body);
        await staff.save();
        res.status(201).send(staff);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all staff members
router.get('/', async (req, res) => {
    try {
        const staff = await Staff.find();
        res.send(staff);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
