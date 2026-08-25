const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const adminRoutes = require("./routes/adminRoutes");
const path = require("path");

dotenv.config();

connectDB();

const app = express();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors());

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
