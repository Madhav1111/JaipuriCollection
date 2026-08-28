const Product = require("../models/Product");

// GET all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// GET single product
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// CREATE product
const createProduct = async (req, res) => {
  try {
    const imageUrls = req.files.map((file) => file.path);

    // Generate slug from product name
    const slug = req.body.name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    const product = await Product.create({
      ...req.body,
      slug,
      images: imageUrls,
    });

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// UPDATE Product
const updateProduct = async (req, res) => {
  try {
    console.log("========== UPDATE ==========");
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);
    console.log("ID:", req.params.id);

    const updateData = {
      ...req.body,
    };

    if (req.files && req.files.length > 0) {
      updateData.images = req.files.map((file) => file.path);
    }

    console.log("UPDATE DATA:", updateData);

    const product = await Product.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    console.log("UPDATED PRODUCT:", product);

    res.json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// DELETE Product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
