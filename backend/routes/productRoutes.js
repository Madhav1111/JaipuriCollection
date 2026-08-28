const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload"); // 👈 Add this

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// GET all products
router.get("/", getProducts);

// GET single product
router.get("/:id", getProduct);

// CREATE product
router.post(
  "/",
  upload.array("images", 6), // 👈 Accept up to 6 images
  createProduct,
);

// UPDATE product
router.put("/:id", upload.array("images", 6), updateProduct);

// DELETE product
router.delete("/:id", deleteProduct);

module.exports = router;
