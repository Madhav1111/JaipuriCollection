const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
    },

    category: {
      type: String,
      required: true,
    },

    collection: {
      type: String,
    },

    fabric: {
      type: String,
    },

    size: [
      {
        type: String,
      },
    ],

    color: {
      type: String,
    },

    description: {
      type: String,
      required: true,
    },

    features: [
      {
        type: String,
      },
    ],

    careInstructions: [
      {
        type: String,
      },
    ],

    price: {
      type: Number,
      required: true,
    },

    originalPrice: {
      type: Number,
    },

    discount: {
      type: Number,
      default: 0,
    },

    stock: {
      type: Number,
      default: 0,
    },

    images: [
      {
        type: String,
      },
    ],

    trending: {
      type: Boolean,
      default: false,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    bestSeller: {
      type: Boolean,
      default: false,
    },

    newArrival: {
      type: Boolean,
      default: false,
    },

    active: {
      type: Boolean,
      default: true,
    },

    rating: {
      type: Number,
      default: 5,
    },

    reviews: {
      type: Number,
      default: 0,
    },

    tags: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Product", productSchema);
