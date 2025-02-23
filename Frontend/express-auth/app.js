// app.js
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Enable CORS
app.use(cors({
  origin: 'http://localhost:1234', // Update with your frontend URL if different
  methods: ['GET', 'POST'], // Allow specific methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

// Dummy user data (replace with a JSON file or database in real applications)
const users = [
  { username: 'testuser', password: 'password123' } // Initial test user
];

// Middleware to check JWT
function authenticateJWT(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.sendStatus(403);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Route to login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
    return res.json({ token });
  }
  return res.sendStatus(401);
});

// Route to sign up
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Check if the user already exists
  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists.' }); // Conflict
  }

  // Create a new user and add to the users array
  users.push({ username, password });
  return res.status(201).json({ message: 'User created successfully.' }); // Created
});

// Protected route
app.get('/profile', authenticateJWT, (req, res) => {
  res.json({ message: `Hello, ${req.user.username}!` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
