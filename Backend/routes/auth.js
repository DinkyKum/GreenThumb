const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authRouter = express.Router();

// Register new user
authRouter.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  

  try {
    let user = await User.findOne({ email });
    if (user) {
      console.log("User already exists:", email);
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);


    user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();
 

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { name: user.name, avatar: user.avatar } });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});


// Login user
authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;


  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found:", email);
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password mismatch for:", email);
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log("User authenticated successfully:", email);
    res.json({ token, user: { name: user.name, avatar: user.avatar } });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});


// Validate JWT token
authRouter.get('/me', async (req, res) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password');
    res.json(user);
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
});

module.exports = authRouter;
