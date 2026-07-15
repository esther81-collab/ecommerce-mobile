const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  res.status(201).json({ message: 'User registered' });
});

router.post('/login', (req, res) => {
  res.json({ token: 'jwt_token_here' });
});

module.exports = router;