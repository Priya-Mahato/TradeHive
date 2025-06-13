const express = require('express');
const router = express.Router();
const Order = require('../model/OrdersModel');

// POST new order
router.post('/newOrder', async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newOrder = new Order({ name, qty, price, mode });
    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
