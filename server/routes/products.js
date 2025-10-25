const express = require('express');
const router = express.Router();

// ✅ Get all products
router.get('/', (req, res) => {
  res.json({ message: 'Products route working' });
});

// ✅ Get single product
router.get('/:id', (req, res) => {
  res.json({ message: `Product ${req.params.id}` });
});

module.exports = router;
