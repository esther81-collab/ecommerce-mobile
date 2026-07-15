const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
  res.json({ user: {} });
});

router.put('/profile', (req, res) => {
  res.json({ message: 'Profile updated' });
});

module.exports = router;