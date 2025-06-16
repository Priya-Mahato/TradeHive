require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/users.routes.js");
const ordersRoutes = require("./routes/orders.routes.js");
const stockRoutes = require("./routes/stocks.routes");


const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");

const PORT = process.env.PORT || 8000;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: ['https://tradehive-frontend.onrender.com', 'https://tradehive-dashboard.onrender.com'],
  credentials: true
}));;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/v1/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});


// Main API routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/orders", ordersRoutes);
app.use("/api/v1/stocks", stockRoutes);

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "AAPL",
//       qty: 3,
//       avg: 180.0,
//       price: 192.32,
//       net: "+6.85%",
//       day: "-0.38%",
//     },
//     {
//       name: "GOOGL",
//       qty: 5,
//       avg: 170.0,
//       price: 178.15,
//       net: "+4.79%",
//       day: "+0.56%",
//     },
//     {
//       name: "MSFT",
//       qty: 2,
//       avg: 315.0,
//       price: 329.8,
//       net: "+4.70%",
//       day: "+0.21%",
//     },
//     {
//       name: "AMZN",
//       qty: 4,
//       avg: 130.0,
//       price: 124.75,
//       net: "-4.04%",
//       day: "-0.14%",
//       isLoss: true,
//     },
//     {
//       name: "META",
//       qty: 2,
//       avg: 280.0,
//       price: 298.2,
//       net: "+6.50%",
//       day: "+1.12%",
//     },
//     {
//       name: "TSLA",
//       qty: 3,
//       avg: 190.0,
//       price: 184.85,
//       net: "-2.71%",
//       day: "-2.45%",
//       isLoss: true,
//     },
//     {
//       name: "NVDA",
//       qty: 1,
//       avg: 400.0,
//       price: 439.95,
//       net: "+9.99%",
//       day: "+0.99%",
//     },
//     {
//       name: "NFLX",
//       qty: 1,
//       avg: 370.0,
//       price: 377.1,
//       net: "+1.92%",
//       day: "-0.60%",
//     },
//     {
//       name: "ADBE",
//       qty: 2,
//       avg: 480.0,
//       price: 502.75,
//       net: "+4.78%",
//       day: "+0.85%",
//     },
//     {
//       name: "ORCL",
//       qty: 5,
//       avg: 115.0,
//       price: 112.1,
//       net: "-2.52%",
//       day: "-0.45%",
//       isLoss: true,
//     },
//     {
//       name: "AMD",
//       qty: 4,
//       avg: 95.0,
//       price: 101.6,
//       net: "+6.95%",
//       day: "+1.30%",
//     },
//     {
//       name: "SHOP",
//       qty: 3,
//       avg: 55.0,
//       price: 60.4,
//       net: "+9.82%",
//       day: "+0.14%",
//     },
//     {
//       name: "UBER",
//       qty: 5,
//       avg: 45.0,
//       price: 48.25,
//       net: "+7.22%",
//       day: "-0.18%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//     });

//     newHolding.save();
//   });
//   res.send("Done!");
// });



// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//    {
//     product: "CNC",
//     name: "INTC",
//     qty: 3,
//     avg: 30.00,
//     price: 32.55,
//     net: "+8.50%",
//     day: "+0.04%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "PYPL",
//     qty: 2,
//     avg: 75.00,
//     price: 70.10,
//     net: "-6.53%",
//     day: "-1.10%",
//     isLoss: true,
//   },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Done!");
// });


//Sample Data Routes
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// ✅ Must be the last route to catch undefined paths
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
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