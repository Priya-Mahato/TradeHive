require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/users.routes.js");
const ordersRoutes = require("./routes/orders.routes.js");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");

const PORT = process.env.PORT || 8000;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(express.json());

// Main API routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/orders", ordersRoutes);

// Sample data routes
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// Connect to DB and start server
mongoose.connect(uri).then(() => {
  console.log("DB started!");
  app.listen(PORT, () => {
    console.log("App started on port " + PORT);
  });
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});
