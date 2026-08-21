const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const Admin = require("./models/Admin");

dotenv.config();

connectDB();

const seedAdmin = async () => {
  try {
    // Delete existing admin (optional)
    await Admin.deleteMany();

    // Hash password
    const hashedPassword = await bcrypt.hash("Madhav123", 10);

    // Create admin
    await Admin.create({
      email: "admin@jaipuricollections.com",
      password: hashedPassword,
    });

    console.log("✅ Admin created successfully");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();