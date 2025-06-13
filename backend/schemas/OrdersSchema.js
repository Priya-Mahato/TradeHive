const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    symbol: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    mode: { type: String, enum: ["BUY", "SELL"], required: true }
  },
  { timestamps: true }
);

module.exports = orderSchema;
