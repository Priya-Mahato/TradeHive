const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    mode: { type: String, enum: ["BUY", "SELL"], required: true }
  },
  { timestamps: true }
);

// Use a check to prevent model overwrite on hot reloads
module.exports = mongoose.models.Order || mongoose.model("Order", orderSchema);
