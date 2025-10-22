const express = require('express');
const cors = require('cors');
const os = require('os');
const http = require('http');
const path = require('path');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Logging middleware using http module
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
const products = require('./routes/products');
app.use('/products', products);

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// System info on start
console.log('System Info:');
console.log('Platform:', os.platform());
console.log('CPU Cores:', os.cpus().length);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
