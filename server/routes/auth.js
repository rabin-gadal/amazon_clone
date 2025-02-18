// IMPORTS FROM PACKAGES
const express = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const authRouter = express.Router();

// Signup Route 
authRouter.post('/api/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // In collection if we have user with same email then we will not allow to signup
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with same email already exists!' });
        }

        // Hashing Password
        const hashedPassword = await bcryptjs.hash(password, 8);

        let user = new User({
            name,
            email,
            password: hashedPassword,
        })

        user = await user.save();
        res.json({ user });

    } catch (e) {
        res.status(500).json({ message: e.message });
    }

});

// Sign In Route
// Exercise
authRouter.post('/api/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .json({ message: 'User with this email does not exist!' });
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password.' });
        }
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});

module.exports = authRouter;