const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ products: [] });
});

router.get('/:id', (req, res) => {
  res.json({ product: {} });
});

module.exports = router;