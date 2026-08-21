const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Jaipuri Collections API Running...");
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});