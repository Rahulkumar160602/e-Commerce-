const express = require('express');
const router = express.Router();

// In-memory product storage
let products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 20.99 }
];

// GET /products - Send all products in JSON
router.get('/', (req, res) => {
  res.json(products);
});

// POST /products - Add a new product using request body (JSON)
router.post('/', (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
