// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/user', async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const user = new User({ name, email, age });
        await user.save();
        res.status(201).json({ message: 'User created successfully', data: user });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

module.exports = router;
