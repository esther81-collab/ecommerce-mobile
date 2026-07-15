const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.status(201).json({ orderId: 1 });
});

router.get('/', (req, res) => {
  res.json({ orders: [] });
});

module.exports = router;