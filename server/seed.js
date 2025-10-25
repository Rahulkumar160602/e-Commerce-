const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const products = [
  // Electronics
  {
    title: "iPhone 15",
    description: "Latest Apple iPhone",
    price: 1200,
    images: ["https://via.placeholder.com/150"],
    category: "Electronics",
    countInStock: 10,
  },
  {
    title: "MacBook Pro",
    description: "Apple MacBook Pro 16-inch",
    price: 2500,
    images: ["https://via.placeholder.com/150"],
    category: "Electronics",
    countInStock: 5,
  },

  // Footwear
  {
    title: "Nike Running Shoes",
    description: "Comfortable running shoes",
    price: 100,
    images: ["https://via.placeholder.com/150"],
    category: "Footwear",
    countInStock: 20,
  },
  {
    title: "Leather Boots",
    description: "Durable leather boots for winter",
    price: 150,
    images: ["https://via.placeholder.com/150"],
    category: "Footwear",
    countInStock: 15,
  },

  // Groceries
  {
    title: "Organic Apples (1kg)",
    description: "Fresh red apples from farm",
    price: 4,
    images: ["https://via.placeholder.com/150"],
    category: "Groceries",
    countInStock: 50,
  },
  {
    title: "Basmati Rice (5kg)",
    description: "Premium long grain basmati rice",
    price: 15,
    images: ["https://via.placeholder.com/150"],
    category: "Groceries",
    countInStock: 30,
  },

  // Clothes
  {
    title: "Men's T-Shirt",
    description: "100% Cotton, slim fit",
    price: 20,
    images: ["https://via.placeholder.com/150"],
    category: "Clothes",
    countInStock: 40,
  },
  {
    title: "Women's Dress",
    description: "Elegant evening dress",
    price: 50,
    images: ["https://via.placeholder.com/150"],
    category: "Clothes",
    countInStock: 25,
  },

  // Crockery
  {
    title: "Ceramic Dinner Set (12 pcs)",
    description: "Stylish crockery for your dining table",
    price: 80,
    images: ["https://via.placeholder.com/150"],
    category: "Crockery",
    countInStock: 12,
  },
  {
    title: "Glass Tumblers (Set of 6)",
    description: "Premium quality transparent glasses",
    price: 25,
    images: ["https://via.placeholder.com/150"],
    category: "Crockery",
    countInStock: 30,
  },
];

const seedProducts = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Seeded successfully");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

seedProducts();
